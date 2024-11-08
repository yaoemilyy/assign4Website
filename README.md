# assign4Website

## Diagram

![codepipeline diagram](https://github.com/user-attachments/assets/c5807839-2441-4fcc-8426-4b4ac15eecdc)

The pipeline follows a CI/CD approach with the following stages:
1. **Source Stage**: Connects to GitHub with a webhook for automatic triggers.
2. **Build/Test Stage**: Runs build and test commands in `buildspec.yml` using CodeBuild.
3. **Deploy Stage**: Deploys the build to EC2 using CodeDeploy.

# Pipeline Setup Guide

## Prerequisites
1. AWS IAM Roles with necessary permissions.
2. An EC2 instance with the correct security group.

### Pipeline Configuration Steps
1. **Source Stage**:
   - Connect to GitHub and enable the webhook.

2. **Build Stage**:
   - Create a CodeBuild project with Node.js as runtime.
   - Use the provided `buildspec.yml` configuration.

3. **Deploy Stage**:
   - Configure CodeDeploy to target your EC2 instance.


# Troubleshooting Guide

## Common Issues

### CodeBuild Errors
- Check logs under CodeBuild in the AWS Console.
- Verify the `buildspec.yml` syntax.

### CodeDeploy Failures
- Access EC2 instance logs at `/var/log/aws/codedeploy-agent/`.
- Confirm IAM roles have correct permissions.
