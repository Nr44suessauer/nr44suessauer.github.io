---
layout: post
title: ProXmoX Quickstart
date: 2025-1-11 16:40:00
description: A virtual environment tool , with Web UI 
tags: installguide basics engineering_tool rts nice_to_know proxmox docker linux
categories: tutorial
disqus_comments: true
featured: false
---

1. [**Introduction**](#introduction)
2. [**What are LXC Containers?**](#what-are-lxc-containers)
3. [**Creating a Bootable USB Stick**](#creating-a-bootable-usb-stick)
    - [**Steps to Create a Bootable USB Stick with balenaEtcher**](#steps-to-create-a-bootable-usb-stick-with-balenaetcher)
4. [**First Login**](#first-login)
5. [**Creating First LXC Container**](#creating-first-lxc-container)
    - [**Download a Template**](#download-a-template)
    - [**Create the Container**](#create-the-container)
    - [**Start the Container**](#start-the-container)
6. [**Nano Text Editor**](#nano-text-editor)
7. [**Using Vim as an Alternative**](#using-vim-as-an-alternative)
    - [**Installing Vim**](#installing-vim)
    - [**Using Vim**](#using-vim)

<div style="display: flex; align-items: center; margin-top: 0px;">
    <p></p>
</div>

## **Introduction**

[![Proxmox Logo](https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_hex_400px.png#joomlaImage://local-images/proxmox/Proxmox_logo_standard_hex_400px.png?width=400&height=60)](https://www.proxmox.com/)

[**Proxmox Virtual Environment (Proxmox VE)**](https://www.proxmox.com/) is an open-source **server virtualization management platform**.  
It is designed to manage **virtual machines**, **containers**, and **storage resources** in a unified and efficient manner.  

Proxmox VE supports both KVM (Kernel-based Virtual Machine) for full virtualization and **LXC (Linux Containers)** for lightweight container-based virtualization.  
Additionally, Proxmox VE **provides an HTTP client interface**, allowing users to access and manage its functionalities programmatically.  

## **What are LXC Containers?**

**LXC (Linux Containers)** is an operating-system-level virtualization method for running **multiple isolated Linux systems** (containers) on a **single Linux control host**. Unlike traditional virtual machines, LXC containers **share the same kernel** as the host system, which makes them **more lightweight and efficient**. 

Key features of LXC containers include:

- **Isolation**: Each container operates in its own isolated environment, with its own file system, processes, and network interfaces.
- **Efficiency**: Containers share the host system's kernel, reducing overhead and improving performance compared to full virtualization.
- **Flexibility**: Containers can be easily created, modified, and destroyed, making them ideal for development, testing, and deployment of applications.

LXC containers are commonly used for **deploying applications in a consistent environment**, ensuring that they run the same way regardless of where they are deployed.

### **Creating a Bootable USB Stick**

Creating a bootable USB stick is an essential step for installing operating systems or running live environments. One of the most user-friendly tools for this purpose is **balenaEtcher**. 

**balenaEtcher** is a free and open-source utility used for writing image files such as `.iso` and `.img` files to USB drives and SD cards. It is available for Windows, macOS, and Linux.

### **Steps to Create a Bootable USB Stick with balenaEtcher**:

To create a bootable USB stick, you can use **balenaEtcher**. Download it from the [balenaEtcher website](https://www.balena.io/etcher/), install it, and follow the simple steps to select your image file and USB drive, then flash the image. Your bootable USB stick will be ready in minutes.

Additionally, you will need the Proxmox VE ISO file. You can download it from the [Proxmox website](https://www.proxmox.com/de/downloads). Once you have the ISO file, you can use balenaEtcher to create a bootable USB stick with the Proxmox VE installer.

### **First Login**

![ProXmoX Port](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/ProXmoX/port.png?raw=true){: style="width: 80%;" }

You can find the IP address either on the **server's display** or in your **router's settings**, such as on a Fritzbox, or you may have defined it during the installation. The default port is set to 8006.

<div style="display: flex; align-items: center; margin-top: 0px;">
    <p></p>
</div>

![ProXmoX Login](https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/ProXmoX/login.png?raw=true){: style="width: 70%;" }

<div style="display: flex; align-items: center; margin-top: 50px;">
    <p></p>
</div>

## **Creating First LXC Container**

To create your first LXC container, you will need a container template. **Proxmox provides a variety of templates for different operating systems and applications**.

### **Download a Template**
<div style="display: flex; align-items: center; margin-top: 0px;">
    <p></p>
</div>

<div style="display: flex; align-items: center; margin-top: 0px;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/gif/LXC-container-Template.gif?raw=true" alt="LXC container Template" style="width: 60%; margin-right: 20px;" />
    <p> Navigate to the Proxmox web interface, go to the <strong>Storage</strong> section, and select the storage where you want to store the template. Click on <strong>Templates</strong> and choose a template from the list. Download the desired template.</p>
</div>

<div style="display: flex; align-items: center; margin-top: 50px;">
    <p></p>
</div>

### **Create the Container**

<div style="display: flex; align-items: center; margin-top: 0px;">
    <p></p>
</div>

<div style="display: flex; align-items: center; margin-top: 0px;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/gif/LXC-Container-erstellen.gif?raw=true" alt="LXC Container erstellen" style="width: 60%; margin-right: 20px;" />
    <p>Once the template is downloaded, go to the <strong>Create CT</strong> option in the Proxmox interface. Follow the wizard to configure the container settings, such as hostname, password, and network configuration. Remember to consider the appropriate partition size.</p>
</div>

<div style="display: flex; align-items: center; margin-top: 50px;">
    <p></p>
</div>

### **Start the Container**

<div style="display: flex; align-items: center; margin-top: 0px;">
    <p></p>
</div>

<div style="display: flex; align-items: center; margin-top: 0px;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/gif/ContainerConsole.gif?raw=true" alt="Container Console" style="width: 60%; margin-right: 20px;" />
    <p>After the container is created, you can start it from the Proxmox interface. You can access the container's console to manage and configure it as needed.</p>
</div>

<div style="display: flex; align-items: center; margin-top: 50px;">
    <p></p>
</div>

Using these steps, you can quickly set up and deploy LXC containers in Proxmox, leveraging the available templates to streamline the process.

---

## **Nano Text Editor**

**Nano** is a **simple**, user-friendly text editor for Unix-like systems. It is often **pre-installed on many** Linux distributions and can be used directly from the command line. 

<div style="display: flex; align-items: center; margin-top: 0px;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/gif/ctrl-W-proxmox.gif?raw=true" alt="Ctrl + W Proxmox" style="width: 60%; margin-right: 20px;" />
    <p>However, using Nano in the Proxmox online console can cause issues because pressing `Ctrl + W` (which is a shortcut in Nano for searching) may close the browser tab instead.</p>
</div>

<div style="display: flex; align-items: center; margin-top: 50px;">
    <p></p>
</div>

# **Using Vim as an Alternative**

To avoid issues with Nano in the Proxmox online console, you can install and use **Vim**, a highly configurable text editor built to enable efficient text editing.

#### **Installing Vim**

To install Vim on your Proxmox server, use the following command:

```bash
apt-get update
apt-get install vim
```

#### **Using Vim**

Once installed, you can open a file with Vim by typing:

```bash
vim filename
```

Here are some basic commands to get you started with Vim:

- **Search**: Type `/search_term` and press `Enter` to search for a term in the file.
- **Insert Mode**: Press `i` to enter insert mode, allowing you to type and edit text.
- **Normal Mode**: Press `Esc` to return to normal mode, where you can navigate and issue commands.
- **Save and Exit**: Type `:wq` and press `Enter` to save changes and exit Vim.
- **Exit Without Saving**: Type `:q!` and press `Enter` to exit without saving changes.

<div style="display: flex; align-items: center; margin-top: 0px;">
    <p></p>
</div>

<div style="display: flex; align-items: center; margin-top: 0px;">
    <img src="https://github.com/Nr44suessauer/nr44suessauer.github.io/blob/main/assets/img/gif/Vim-Console.gif?raw=true" alt="Vim Console" style="width: 60%; margin-right: 20px;" />
</div>
    
<div style="display: flex; align-items: center; margin-top: 10px;">
    <p></p>
</div>



