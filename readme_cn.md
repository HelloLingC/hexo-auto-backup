# Hexo Auto Backup

此Hexo插件可无缝地自动化备份Hexo数据，包括文章、草稿、页面和主题文件，确保在本地和云端存储上都有备份。

每当部署Hexo博客时，自动备份操作将会发生。

备份包含了不同时间段的`package.json`、`_config.yml`以及整个source、themes目录。

由于这个插件基于Rclone，它支持与Rclone相同范围的平台。

- Local, 如便携式USB, SD Card
- FTP
- Google Drive
- OneDrive
- pCloud
- PikPak
- SFTP
- ......

对于全部支持的平台，请阅览 https://rclone.org/

# 为什么你需要这个插件

根据321备份原则：3份数据副本，2种不同存储介质，1份离线备份。

这将是最佳实践，以确保正确保存你珍贵的数据。

如果你使用Github Pages来托管你的博客，这意味着你的配置文件、草稿和主题文件完全没有备份！

# 使用方法

安装插件：

`npm install hexo-auto-backup`

请在 https://rclone.org/downloads/ 下载rclone.exe

将插件的配置追加到你的全局 _config.yml 中：

```
autobackup:
    enable: true
    # 包含rclone.exe的文件夹的路径
    rclonepath: C:\Users\lingc
    # 每次hexo-auto-backup运行时，将会删除超过预定义时间限制的备份。时间单位为天。
    expire: 30
    type:
        - local > A:\blog-backup
        - onedrive > \blog-backup
        - googledrive > \backup
    # 你可以加入多个type，每个type使用 ">" 分隔参数。
    # "local" 始终指的是本地磁盘或 USB 设备。
    # 第一个参数是在 rclone 中配置的远程名称，代表一个服务，
    # 而第二个参数是目标路径
```

# 云备份

如果你想将数据备份到云盘，你必须首先配置rclone。

如果你只需要本地备份，提供一个`rclonepath`变量即可。

`
按照 [rclone 文档](https://rclone.org/docs/) 的指导，根据所需的平台配置你的rclone。

Rclone非常好用，因为他们编写了很多友好且有用的文档，这将在每个步骤中帮助你。
