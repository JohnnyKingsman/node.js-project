Secure Shell (SSH) Presentation
==================================

Welcome to a quick run through of SSH.

---

## Agenda

1. Introduction to SSH
2. How SSH Works
3. Advantages of SSH
4. SSH Key Authentication
5. SSH Use Cases and Commands
6. Comparison with Telnet
7. Conclusion

---

## 1. Introduction to SSH

### What is SSH?

- SSH, or Secure Shell, is a cryptographic network protocol used for secure communication over an unsecured network. It provides a secure channel over an insecure network, such as the internet.
<br>

- It provides secure remote login and other network services, protecting data from interception and eavesdropping.
<br>

- SSH is a software based approach to network security.

- Comes built into with all Linux Distributions, *nix based OS and other Unix variants.

- SSH is a replacement for Telnet,rogin, rsh, rep, ftp, etc.

- SSH is typically used to log into a remote machine and execute commands, but it also supports tunneling, forwarding TCP ports and X11 connections; it can transfer files using the associated SSH file transfer (SFTP) or secure copy (SCP) protocols.

### Key Features

- Encrypted communication

- Authentication

- Secure file transfer (SCP and SFTP)

- Tunneling for secure network services

---

### What SSH is NOT

SSH is not a true shell like csh, ksh, sh etc.

It is not a complete security solution


---

## SSH History

- SSH was developed in 1995 by Tatu Ylönen, a researcher at Helsinki University of Technology.

- SSH was designed as a replacement for Telnet and other insecure remote shells, which send information, notably passwords, in plaintext, rendering them susceptible to interception and disclosure using packet analysis.

- The IETF formed a group called SECSH, to standardize the protocol.

- In 2006,IETF SECSH group released SSH-2 as the Internet standard, replacing SSH-1.

---

## 2. How SSH Works

1. **Encryption:** SSH encrypts data during transmission to prevent eavesdropping.
2. **Authentication:** Users must authenticate using a username and password or SSH keys.
3. **Secure Connection:** SSH creates a secure connection between the client and server.

---

## 3. Advantages of SSH

### Security

- Encrypts data to prevent unauthorized access.
- Protects against eavesdropping and man-in-the-middle attacks.

### Authentication

- Supports password-based authentication and public-key cryptography.
- Two-factor authentication can be implemented for added security.

### Remote Access

- Allows users to access remote servers securely.
- Widely used for remote administration of servers.

---

## 4. SSH Key Authentication

### SSH Authentication Methods

- Password-based authentication
- Public-key cryptography
- Two-factor authentication

### How SSH Keys Work

- SSH keys consist of a public key and a private key. <br>
- The public key is stored on the server, and the private key is kept by the user. <br>
- Authentication occurs without the need for a password. <br>

### Benefits

- Increased security: No need to transmit passwords over the network.
- Convenient and efficient for automated processes.

---

## 5. SSH Use Cases and Commands

### Common SSH Use Cases

1. **Remote Server Access:**
   - Connect to a remote server securely.

   ```bash
   ssh username@remote-server

---

## Some Tools that we use to access SSH Services

- **PuTTY:** A free and open-source terminal emulator, serial console and network file transfer application. It supports several network protocols, including SCP, SSH, Telnet, rlogin, and raw socket connection. It can also connect to a serial port.<br>


- **MobaXterm:** A proprietary terminal emulator for Microsoft Windows. It is enhanced for use on Unix-like systems with a built-in X11 server, and tabbed SSH client functions. MobaXterm is portable and light application.<br>


- **OpenSSH:** A free and open-source implementation of the Secure Shell protocol. It encrypts all traffic to eliminate eavesdropping, connection hijacking, and other attacks. It also provides secure tunneling capabilities and several authentication methods, and supports all SSH protocol versions.


- **WinSCP:** A free and open-source SFTP, SCP, FTPS and FTP client for Microsoft Windows. Its main function is secure file transfer between a local and a remote computer. Beyond this, WinSCP offers basic file manager and file synchronization functionality.


- **Termius:** A cross-platform SSH client that works on Windows, Mac, iOS, and Android. It supports SSH, Mosh, and Telnet, and features tabbed sessions, a host favoriting feature, and a command palette for common actions.

---

## Setting Up Dev Environments

We have a few options for our development servers where we run different versions of Lime.

1. Dev1
2. Dev2
3. Dev3