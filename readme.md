# Hexo Auto Backup Plugin

This Hexo plugin seamlessly automates the backup process for your Hexo data, encompassing posts, drafts, pages, and theme files, ensuring local and cloud drive storage.

The automatic backup action will happen everytime when you deploy your hexo blog.

Since this plugin is based on Rclone, it extends support to the same range of platforms as Rclone does:

- Local, like a portable USB or a sd card
- FTP
- Google Drive
- OneDrive
- pCloud
- PikPak
- SFTP
- ......

For all the storage platforms supported by hexo-auto-backup, check https://rclone.org/

# Why you need this plugin

According to 321 backup strategy: 3 Copies of Your Data, 2 Different Storage Media, 1 Offsite Backup. This is the least standard.

This will be the best practice to properly save your precious data.

And if you are using Github Pages to hold your blog, it means your drafts and theme files totally have no copies!

And this plugin will backup the whole of your `source` and `themes` directories from different time periods.

# How to Use

Go to the hexo folder, Install the plugin:

`npm install hexo-auto-backup`

Append the plugin config to your global _config.yml: 

```
enable: true
# Each time the hexo-auto-backup runs, it will remove backups that exceed the predefined time limit. The unit is day.
expire: 30
type:
    - local > A:\blog-backup
    - onedrive > \blog-backup
    - googledrive > \backup
# Use ">" to separate the arguments.
# The first argument is the name configured in rclone, which represents a service, and the second argument is the dest path.

```

## Backup on Cloud

If you wanna backup your data onto cloud drives, you must configure rclone first.

To do so, download rclone at https://rclone.org/downloads/

Then provide the path of rclone.exe in the plugin config.

```
rclondpath: C:\Users\lingc
```

Follow the [rclone docs](https://rclone.org/docs/) to configure your rclone with your needed platform.

Rclone is pretty nice, since they write so many friendly and useful docs, which will help your within every step.

