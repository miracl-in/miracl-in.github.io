export interface DownloadItem {
  title: string
  description: string
  fileName: string
  category: string
  type?: 'pdf' | 'video'
  externalUrl?: string
}

export const downloads: DownloadItem[] = [
  {
    title: "Deploying a Linux EC2 Instance and Connecting via SSH",
    description: "Step-by-step guide to launching a Linux EC2 instance on AWS and connecting to it securely using SSH.",
    fileName: "Deploying a Linux EC2 Instance and Connecting via SSH.pdf",
    category: "AWS"
  },
  {
    title: "Unix Origin and Basic Commands",
    description: "Introduction to Unix history, architecture, and essential commands to get started.",
    fileName: "Unix-Session01.pdf",
    category: "Unix/Linux"
  },
  {
    title: "UNIX File System Organization",
    description: "Understanding the Unix/Linux file system hierarchy and directory structure.",
    fileName: "FileSystemOrganization-Session02.pdf",
    category: "Unix/Linux"
  },
  {
    title: "Shell and Bash Basics",
    description: "Fundamentals of shell scripting and working with the Bash command line.",
    fileName: "Shell-bash-basics-Session05.pdf",
    category: "Unix/Linux"
  },
  {
    title: "Complete Python Programming Notes",
    description: "Complete syllabus and course outline for Python programming.",
    fileName: "PythonSyllabus.pdf",
    category: "Python"
  },
  {
    title: "Jenkins Installation",
    description: "Session recording: Jenkins Installation & Freestyle Job creation.",
    fileName: "Jenkins_Installation.mp4",
    category: "DevOps",
    type: "video",
    externalUrl: "https://drive.google.com/file/d/1bx1ZpfYluJZq8qeSSnB8EzG9PZVW44Bu/preview"
  },
  {
    title: "Jenkins Pipeline",
    description: "Online Session 02 recording: Jenkins installation & Jenkins pipeline creation, discussion on pipeline workflow.",
    fileName: "Jenkins_pipeline.mp4",
    category: "DevOps",
    type: "video",
    externalUrl: "https://drive.google.com/file/d/1iry8n-hvvijTMwL5g9ymyFaQhwsu_rUp/preview"
  },
]
