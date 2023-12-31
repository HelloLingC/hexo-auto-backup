# Hexo Auto Backup

[中文版](readme_cn.md) | English

This Hexo plugin seamlessly automates the backup process for your Hexo data, encompassing posts, drafts, pages, and theme files, ensuring local and cloud drive storage.

The automatic backup action will happen everytime when you deploy your hexo blog.

The backup cotains package.json, `_config.yml` and the whole of your `source`, `themes` directories from different time periods.

Since this plugin is based on Rclone, it extends support to the same range of platforms as Rclone does:

- Local, like a portable USB or a SD Card
- FTP
- Google Drive
- OneDrive
- pCloud
- PikPak
- SFTP
- ......

For all the storage platforms supported by hexo-auto-backup, check https://rclone.org/

# Why you need this plugin

According to 321 backup strategy: 3 Copies of Your Data, 2 Different Storage Media, 1 Offsite Backup.

This will be the best practice to properly save your precious data.

If you are using Github Pages to hold your blog, it means your configs, drafts and theme files totally have no copies!

# How to Use

Install the plugin:

`npm install hexo-auto-backup`

Download rclone.exe at https://rclone.org/downloads/

Append the plugin config to your global _config.yml: 

```
autobackup:
    enable: true
    # The path of a folder where rclone.exe is
    rclonepath: C:\Users\lingc
    # Each time the hexo-auto-backup runs, it will remove backups that exceed the predefined time limit. The unit is day.
    expire: 30
    type:
        - local > A:\blog-backup
        - onedrive > \blog-backup
        - googledrive > \backup
    # You can add mutiple types, use ">" to separate the arguments for each type.
    # The local always refers to a local disk, or a usb
    # The first argument is the remote name configured in rclone,
    # which represents a service,
    # And the second argument is the dest path.
```

## Cloud Backup

If you want to backup your data onto cloud drives, you must configure rclone first.

If you only require local backups, then only provide `rclonepath`.

Follow the [rclone docs](https://rclone.org/docs/) to configure your rclone with your needed platform.

Rclone is pretty nice, since they write so many friendly and useful docs, which will help your within every step.

