export interface DownloadItem {
  title: string
  description: string
  fileName: string
  category: string
}

export const downloads: DownloadItem[] = [
  {
    title: "Deploying a Linux EC2 Instance and Connecting via SSH",
    description: "Step-by-step guide to launching a Linux EC2 instance on AWS and connecting to it securely using SSH.",
    fileName: "Deploying a Linux EC2 Instance and Connecting via SSH.pdf",
    category: "AWS"
  },
]
