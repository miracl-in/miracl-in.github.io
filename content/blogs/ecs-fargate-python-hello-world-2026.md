---
title: "ECS Fargate Deployment: Python Hello World Application"
date: "2026-05-08"
author: "Miraclin Technologies"
excerpt: "Deploy a simple Python Hello World app on AWS ECS Fargate. Step-by-step guide covering Docker, ECR, task definitions, and service deployment."
image: "/ecs-fargate-python-hello-world.png"
tags: ["AWS", "ECS", "Fargate", "Docker", "Python", "Containers"]
---

# ECS Fargate Deployment: Python Hello World Application

This guide walks you through deploying a simple Python "Hello World" web application on AWS ECS Fargate — from writing the app to accessing it via a public URL.

## Architecture Overview

```
                    Internet
                       |
              [Application Load Balancer]
                       |
                  [ECS Service]
                       |
              [Fargate Task(s)]
                       |
              [Python Container]
                (hello-world-app)
```

**What is ECS Fargate?**
- ECS (Elastic Container Service) runs Docker containers on AWS
- Fargate is the serverless compute engine — no EC2 instances to manage
- You define what container to run, and AWS handles the infrastructure

---

## Prerequisites

- AWS account with admin access
- AWS CLI installed and configured (`aws configure`)
- Docker installed locally
- A terminal (Linux/Mac/WSL)

---

## Step 1: Create the Python Application

Create a project directory:

```bash
mkdir hello-world-ecs && cd hello-world-ecs
```

### app.py

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World from ECS Fargate!"

@app.route("/health")
def health():
    return "OK", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

### requirements.txt

```
flask==3.1.0
```

---

## Step 2: Create the Dockerfile

### Dockerfile

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

EXPOSE 5000

CMD ["python", "app.py"]
```

### Test locally (optional)

```bash
docker build -t hello-world-app .
docker run -p 5000:5000 hello-world-app
# Visit http://localhost:5000 — should see "Hello World from ECS Fargate!"
# Ctrl+C to stop
```

---

## Step 3: Create an ECR Repository

ECR (Elastic Container Registry) stores your Docker image so ECS can pull it.

1. Go to **Amazon ECR Console** → **Repositories** → **Create repository**
2. Fill in:
   - **Visibility**: Private
   - **Repository name**: `hello-world-app`
3. Click **Create repository**

Or via CLI:

```bash
aws ecr create-repository --repository-name hello-world-app --region us-east-1
```

---

## Step 4: Push Docker Image to ECR

1. **Authenticate Docker to ECR**:

```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com
```

> Replace `<AWS_ACCOUNT_ID>` with your 12-digit AWS account ID.

2. **Tag the image**:

```bash
docker tag hello-world-app:latest <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/hello-world-app:latest
```

3. **Push the image**:

```bash
docker push <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/hello-world-app:latest
```

4. **Verify** in the ECR console — you should see the `latest` tag under your repository.

---

## Step 5: Create an ECS Cluster

1. Go to **ECS Console** → **Clusters** → **Create cluster**
2. Fill in:
   - **Cluster name**: `hello-world-cluster`
   - **Infrastructure**: Select **AWS Fargate (serverless)** only (uncheck EC2 if checked)
3. Click **Create**

---

## Step 6: Create a Task Execution Role

ECS needs an IAM role to pull images from ECR and write logs.

1. Go to **IAM Console** → **Roles** → **Create role**
2. **Trusted entity type**: AWS service
3. **Use case**: Select **Elastic Container Service** → **Elastic Container Service Task**
4. Click **Next**
5. **Attach policy**: Search and select `AmazonECSTaskExecutionRolePolicy`
6. Click **Next**
7. **Role name**: `ecsTaskExecutionRole`
8. Click **Create role**

> If `ecsTaskExecutionRole` already exists in your account, skip this step.

---

## Step 7: Create a Task Definition

The task definition tells ECS what container to run and how.

1. Go to **ECS Console** → **Task definitions** → **Create new task definition**
2. Fill in:

   **Task definition family**: `hello-world-task`

   **Infrastructure requirements**:
   - **Launch type**: AWS Fargate
   - **Operating system/Architecture**: Linux/X86_64
   - **CPU**: 0.25 vCPU
   - **Memory**: 0.5 GB
   - **Task execution role**: Select `ecsTaskExecutionRole`

3. **Container - 1**:
   - **Name**: `hello-world-container`
   - **Image URI**: `<AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/hello-world-app:latest`
   - **Container port**: `5000`
   - **Protocol**: TCP
   - **Port name**: `hello-world-port` (or leave auto-generated)

4. Expand **Logging** (should be enabled by default with `awslogs`):
   - **Log group**: `/ecs/hello-world-task` (auto-created)

5. Click **Create**

---

## Step 8: Create a Security Group for the Service

1. Go to **VPC Console** → **Security Groups** → **Create security group**
2. Fill in:
   - **Name**: `hello-world-ecs-sg`
   - **Description**: `Allow HTTP traffic to ECS tasks`
   - **VPC**: Select your default VPC
3. **Inbound rules** → **Add rule**:
   - **Type**: Custom TCP
   - **Port range**: `5000`
   - **Source**: `0.0.0.0/0` (allows public access)
4. **Outbound rules**: Leave default (all traffic allowed)
5. Click **Create security group**

---

## Step 9: Create the ECS Service

The service keeps your task running and connects it to networking.

1. Go to **ECS Console** → **Clusters** → Select `hello-world-cluster`
2. Under **Services** tab → Click **Create**
3. Fill in:

   **Environment**:
   - **Compute options**: Launch type
   - **Launch type**: FARGATE

   **Deployment configuration**:
   - **Application type**: Service
   - **Task definition family**: `hello-world-task`
   - **Revision**: LATEST
   - **Service name**: `hello-world-service`
   - **Desired tasks**: `1`

4. Expand **Networking**:
   - **VPC**: Select your default VPC
   - **Subnets**: Select at least one public subnet
   - **Security group**: Remove default, select `hello-world-ecs-sg`
   - **Public IP**: **Turned on** (required for Fargate tasks in public subnets to pull images)

5. Click **Create**

---

## Step 10: Access Your Application

1. Go to **ECS Console** → **Clusters** → `hello-world-cluster` → **Services** → `hello-world-service`
2. Click the **Tasks** tab
3. Click the running task ID
4. Under **Configuration**, find the **Public IP**
5. Open in browser:

```
http://<TASK_PUBLIC_IP>:5000
```

You should see: **Hello World from ECS Fargate!**

---

## (Optional) Step 11: Add an Application Load Balancer

For production use, add an ALB for a stable DNS endpoint and health checks.

### Create a Target Group

1. Go to **EC2 Console** → **Target Groups** → **Create target group**
2. Fill in:
   - **Target type**: IP addresses
   - **Name**: `hello-world-tg`
   - **Protocol**: HTTP
   - **Port**: `5000`
   - **VPC**: Default VPC
   - **Health check path**: `/health`
3. Click **Next** → **Create target group** (don't register targets manually — ECS does this)

### Create the ALB

1. Go to **EC2 Console** → **Load Balancers** → **Create load balancer**
2. Select **Application Load Balancer** → **Create**
3. Fill in:
   - **Name**: `hello-world-alb`
   - **Scheme**: Internet-facing
   - **IP address type**: IPv4
   - **VPC**: Default VPC
   - **Mappings**: Select at least 2 availability zones
   - **Security group**: Create or select one allowing HTTP port 80 inbound
   - **Listener**: HTTP : 80 → Forward to `hello-world-tg`
4. Click **Create load balancer**

### Update the ECS Service

1. Go to **ECS Console** → `hello-world-cluster` → `hello-world-service` → **Update**
2. Under **Load balancing**:
   - **Load balancer type**: Application Load Balancer
   - **Load balancer**: `hello-world-alb`
   - **Container**: `hello-world-container : 5000`
   - **Target group**: `hello-world-tg`
3. Click **Update**

Now access your app via the ALB DNS name (found in the Load Balancer details):

```
http://hello-world-alb-xxxxxxxx.us-east-1.elb.amazonaws.com
```

---

## Viewing Logs

1. Go to **CloudWatch Console** → **Log groups** → `/ecs/hello-world-task`
2. Click the latest log stream to see Flask output

Or via CLI:

```bash
aws logs tail /ecs/hello-world-task --follow
```

---

## Quick Verification Checklist

- [ ] Python app runs locally with Docker on port 5000
- [ ] Docker image pushed to ECR repository `hello-world-app`
- [ ] ECS cluster `hello-world-cluster` created (Fargate)
- [ ] Task execution role `ecsTaskExecutionRole` exists with correct policy
- [ ] Task definition `hello-world-task` created with correct image URI and port
- [ ] Security group allows inbound TCP on port 5000
- [ ] ECS service running with 1 desired task
- [ ] Task has a public IP and app is accessible at `http://<IP>:5000`
- [ ] (Optional) ALB forwards port 80 to target group on port 5000

---

## Cleanup

Delete in this order:

1. **ECS Service**: Set desired tasks to 0, then delete the service
2. **ECS Cluster**: Delete `hello-world-cluster`
3. **Task Definition**: Deregister `hello-world-task`
4. **ECR Repository**: Delete `hello-world-app` (and its images)
5. **Load Balancer**: Delete `hello-world-alb` (if created)
6. **Target Group**: Delete `hello-world-tg` (if created)
7. **Security Group**: Delete `hello-world-ecs-sg`
8. **IAM Role**: Keep `ecsTaskExecutionRole` (reusable) or delete if no longer needed
9. **CloudWatch Log Group**: Delete `/ecs/hello-world-task`

---

## Common Troubleshooting

| Issue | Solution |
|---|---|
| Task keeps stopping | Check CloudWatch logs for Python errors; verify image URI is correct |
| Can't pull image from ECR | Ensure task execution role has `AmazonECSTaskExecutionRolePolicy`; verify public IP is enabled |
| Health check failing | Confirm `/health` endpoint returns 200; check security group allows traffic on port 5000 |
| Can't access public IP | Verify security group inbound rule; ensure task is in a public subnet with public IP enabled |
| ALB returns 502 | Target group health check failing; check port mapping matches (5000) |
