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

6. Setting Up Dev Environments
7. Conclusion

---

## 1. Introduction to SSH

### What is SSH?

- SSH, or Secure Shell, is a cryptographic network protocol used for secure communication over an unsecured network. It provides a secure channel over an insecure network, such as the internet.
<br>

- It provides secure remote login and other network services, protecting data from interception and eavesdropping.
<br>

- SSH is a software based approach to network security.
<br>

- Comes built into with all Linux Distributions, *nix based OS and other Unix variants.
<br>

- SSH is a replacement for Telnet,rogin, rsh, rep, ftp, etc.
<br>

- SSH is typically used to log into a remote machine and execute commands, but it also supports tunneling, forwarding TCP ports and X11 connections; it can transfer files using the associated SSH file transfer (SFTP) or secure copy (SCP) protocols.
<br>
<br>

### Key Features

- Encrypted communication

- Authentication

- Secure file transfer (SCP and SFTP)

- Tunneling for secure network services

---

### What SSH is NOT

- SSH is not a true shell like csh, ksh, sh etc.

- It is not a complete security solution.

- It won't prevent the system from being hacked.


---

## SSH History

- SSH was developed in 1995 by Tatu Ylönen, a researcher at Helsinki University of Technology.
<br>

- SSH was designed as a replacement for Telnet and other insecure remote shells, which send information, notably passwords, in plaintext, rendering them susceptible to interception and disclosure using packet analysis.
<br>

- The IETF formed a group called SECSH, to standardize the protocol.
<br>

- In 2006,IETF SECSH group released SSH-2 as the Internet standard, replacing SSH-1.

---

## 2. How SSH Works

1. **Encryption:** SSH encrypts data during transmission to prevent eavesdropping.
<br>

2. **Authentication:** Users must authenticate using a username and password or SSH keys.
<br>

3. **Secure Connection:** SSH creates a secure connection between the client and server.
<br>


## 3. Advantages of SSH

### Security

- Encrypts data to prevent unauthorized access.
<br>

- Protects against eavesdropping and man-in-the-middle attacks.
<br>
<br>

### Authentication

- Supports password-based authentication and public-key cryptography.
<br>

- Two-factor authentication can be implemented for added security.
<br>
<br>


### Remote Access

- Allows users to access remote servers securely.
<br>

- Widely used for remote administration of servers.

---

## 4. SSH Key Authentication

### SSH Authentication Methods

- Password-based authentication
- Public-key cryptography
- Two-factor authentication
<br>
<br>
<br>

### How SSH Keys Work

- SSH keys consist of a public key and a private key.
<br>

- The public key is stored on the server, and the private key is kept by the user.
<br>

- Authentication occurs without the need for a password.
<br>

- The private key is never shared and is used to decrypt data encrypted by the public key.
<br>

- The public key can be shared freely without compromising security.
<br>

- The identity file is the file that contains the private key. It's often in a format as .pem (Privacy Enhanced Mail) or .ppk (PuTTY Private Key).
<br>

- When connecting to a server using SSH, you specify the identity file with the -i option.
<br>
<br>

### Benefits

- Increased security: No need to transmit passwords over the network.
<br>

- Convenient and efficient for automated processes.
<br>

---

## Config File in SSH
<br>
- The SSH config file is a configuration file for the SSH client. It is located at ~/.ssh/config. It is also possible to have a system-wide config file at /etc/ssh/ssh_config. The SSH config file can be used to specify options for specific hosts or global options.

<br>

- The SSH config file is also read by other programs such as scp, sftp, and rsync. The config file is organized into stanzas (sections) that contain keys and values in the format of `Key Value`. The keys are case-insensitive. The values are case-sensitive.
<br>

- The SSH config file is read every time you initiate an SSH connection. This means that you can add or change options at any time and they will be applied to new SSH connections.

### Example of a Config File

```bash
   Host excess
        User ec2-user
        HostName excess.lime.linear6.com
        IdentityFile ~/.ssh/limekeys.pem
```

**Host:**: The Host keyword is followed by the name of the host. This can be a hostname or an IP address. The host name can contain wildcards such as * and ?. The host name can also be an alias that is defined in the /etc/hosts file. This is also the name that is used to connect to the host using the ssh command. Eg: `ssh excess`
<br>

**User:**: The User keyword is followed by the username that you want to use when connecting to the host. This is optional. If not specified, the username that you are currently logged in as will be used.
<br>

**HostName:**: The HostName keyword is followed by the hostname or IP address of the host. This is optional. If not specified, the host name that was specified on the Host line will be used.
<br>

**IdentityFile:**: The IdentityFile keyword is followed by the path to the identity file. This is optional. If not specified, the default identity file will be used. The default identity file is ~/.ssh/id_rsa for RSA keys and ~/.ssh/id_dsa for DSA keys.
<br>

---

## Other Uses of SSH

### **SCP:**
<br>

- Secure Contain Protect (scp) is a command-line utility that allows you to securely copy files and directories between two locations. With scp, you can copy a file or directory from:
<br>

   1. Your local system to a remote system:
      ```bash
      scp /path/to/local/file username@remote-host:/path/to/remote/file
      ```
      <br>
      <br>

   2. A remote system to your local system:
      ```bash
      scp username@remote-host:/path/to/remote/file /path/to/local/file
      ```
      <br>
      <br>

   3. A remote system to another remote system:
      ```bash
      scp username@remote-host:/path/to/remote/file username@remote-host:/path/to/remote/file
      ```

---

### **SFTP:**
<br>
<br>

- Secure File Transfer Protocol (SFTP) is a secure version of FTP that transfers files over the SSH protocol. SFTP is similar to FTP, but unlike FTP, the entire session is encrypted, meaning no passwords are sent in cleartext form, and is thus much less vulnerable to third-party interception.
<br>

- SFTP can be done using a command-line utility or an SFTP client such as Mobaxterm, WinSCP, FileZilla, etc.
<br>

- SFTP is not FTP run over SSH, but rather a new protocol designed from the ground up by the IETF SECSH working group.


---

## 5. SSH Use Cases and Commands
<br>
<br>

### Common SSH Use Cases
<br>

1. **Remote Server Access:**
   - Connect to a remote server securely.
   <br>

   ```bash
   ssh -i "path/to/identity_file.pem" username@remote-server
   ```
   <br>
   <br>

2. **File Transfer:**
   - Transfer files securely between a local and remote server.
   <br>

   ```bash
   scp -i "path/to/identity_file.pem" "path/to/local/file" username@remote-server:"path/to/remote/file"
   ```
   <br>
   <br>

3. **Port Forwarding:**
   - Forward a local port to a remote server.
   <br>

   ```bash
   ssh -i "path/to/identity_file.pem" -L local-port:remote-server:remote-port username@remote-server
   ```
   <br>
   <br>


---

## Some Tools that we use to access SSH Services

### **PuTTY:**

A free and open-source terminal emulator, serial console and network file transfer application. It supports several network protocols, including SCP, SSH, Telnet, rlogin, and raw socket connection. It can also connect to a serial port.
<br>
<br>


### **MobaXterm:**

A proprietary terminal emulator for Microsoft Windows. It is enhanced for use on Unix-like systems with a built-in X11 server, and tabbed SSH client functions. MobaXterm is portable and light application.
<br>
<br>


### **OpenSSH:**

A free and open-source implementation of the Secure Shell protocol. It encrypts all traffic to eliminate eavesdropping, connection hijacking, and other attacks. It also provides secure tunneling capabilities and several authentication methods, and supports all SSH protocol versions.
<br>
<br>


### **WinSCP:**

A free and open-source SFTP, SCP, FTPS and FTP client for Microsoft Windows. Its main function is secure file transfer between a local and a remote computer. Beyond this, WinSCP offers basic file manager and file synchronization functionality.
<br>
<br>


### **Termius:**

A cross-platform SSH client that works on Windows, Mac, iOS, and Android. It supports SSH, Mosh, and Telnet, and features tabbed sessions, a host favoriting feature, and a command palette for common actions.
<br>
<br>

---

## 6. Setting Up Dev Environments
<br>
<br>

We have a few options for our development servers where we run different versions of Lime.
To connect to each of these servers

1. Dev1
To connect to dev1 using SSH, we use the command:

   ```bash
   ssh -i "limekeys.pem" ec2-user@limedev1.linear6.com
   ```

2. Dev2
To connect to dev2 using SSH, we use the command:

   ```bash
   ssh -i "limekeys.pem" ec2-user@limedev2.linear6.com
   ```

3. Dev3
To connect to dev3 using SSH, we use the command:

   ```bash
   ssh -i "limekeys.pem" ec2-user@limedev3.linear6.com
   ```
---

## 7. Activity Time!!!

Let's do some basic SSH commands to get familiar with the tool.
