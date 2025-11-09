# Gary Lee Portfolio

Gary Lee 的个人作品集网站，使用神经风格主题设计。

## GitHub Pages 部署

这个网站可以部署到 GitHub Pages 上。以下是设置步骤：

### 1. 创建 GitHub 仓库

1. 在 GitHub 上创建一个新仓库（例如：`garylee`）
2. 将所有文件推送到仓库

### 2. 启用 GitHub Pages

1. 进入仓库的 Settings
2. 找到 Pages 选项
3. 选择 Source 为 `main` 分支（或你的主分支）
4. 保存后，网站将在 `https://你的用户名.github.io/仓库名` 上可用

## 添加图片和视频

### 文件夹结构

在项目根目录创建以下文件夹结构：

```
garylee/
├── index.html
├── tooplate-neural-style.css
├── tooplate-neural-scripts.js
├── assets/
│   ├── images/
│   │   └── projects/
│   │       ├── 2dhappytravel/
│   │       │   ├── image1.jpg
│   │       │   └── image2.jpg
│   │       ├── quantum-ui/
│   │       │   └── image1.jpg
│   │       ├── cyber-portal/
│   │       │   ├── image1.jpg
│   │       │   └── image2.jpg
│   │       ├── data-stream/
│   │       │   └── image1.jpg
│   │       ├── neon-grid/
│   │       │   ├── image1.jpg
│   │       │   ├── image2.jpg
│   │       │   └── image3.jpg
│   │       └── matrix-view/
│   │           └── image1.jpg
│   └── videos/
│       └── projects/
│           ├── 2dhappytravel/
│           │   └── demo.mp4
│           ├── quantum-ui/
│           │   └── demo.mp4
│           ├── data-stream/
│           │   └── demo.mp4
│           └── matrix-view/
│               └── demo.mp4
```

### 方式1：使用相对路径（推荐）

在 `tooplate-neural-scripts.js` 中的 `projectsData` 数组里，使用相对路径：

```javascript
{
    title: "2DHappyTravel",
    images: [
        "assets/images/projects/2dhappytravel/image1.jpg",
        "assets/images/projects/2dhappytravel/image2.jpg"
    ],
    video: "assets/videos/projects/2dhappytravel/demo.mp4"
}
```

**优点：**
- 简单直接
- 文件在仓库中，易于管理
- 支持版本控制

### 方式2：使用 GitHub Raw 链接

如果文件已经在仓库中，可以使用 GitHub 的 raw 链接：

```javascript
{
    title: "2DHappyTravel",
    images: [
        "https://raw.githubusercontent.com/你的用户名/garylee/main/assets/images/projects/2dhappytravel/image1.jpg"
    ],
    video: "https://raw.githubusercontent.com/你的用户名/garylee/main/assets/videos/projects/2dhappytravel/demo.mp4"
}
```

**格式：**
```
https://raw.githubusercontent.com/用户名/仓库名/分支名/文件路径
```

**优点：**
- 可以使用绝对路径
- 适合跨仓库引用

### 方式3：Base64 内嵌（仅适用于小图片）

对于非常小的图片（< 100KB），可以使用 base64 编码直接内嵌：

1. 使用在线工具转换图片为 base64：
   - https://www.base64-image.de/
   - https://base64.guru/converter/encode/image

2. 在代码中使用：

```javascript
{
    title: "2DHappyTravel",
    images: [
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD..."
    ]
}
```

**注意：**
- ⚠️ 仅适用于小图片（< 100KB）
- ⚠️ 视频文件太大，不推荐使用 base64
- ⚠️ Base64 编码会让 HTML/JS 文件变大

## 图片和视频格式建议

### 图片
- **格式：** JPG 或 PNG
- **大小：** 建议每张图片 < 2MB
- **尺寸：** 建议宽度 800-1200px，保持宽高比

### 视频
- **格式：** MP4（H.264 编码）
- **大小：** 建议 < 50MB（GitHub 单个文件限制 100MB）
- **分辨率：** 建议 720p 或 1080p
- **时长：** 建议 < 5 分钟

## 更新项目内容

编辑 `tooplate-neural-scripts.js` 文件中的 `projectsData` 数组来更新项目信息：

1. 修改项目标题和描述
2. 更新图片路径
3. 更新视频路径（如果有）
4. 修改文字内容

## 功能特性

- ✅ 响应式设计，支持移动设备
- ✅ 神经风格主题，霓虹效果
- ✅ 项目模态框展示详细信息
- ✅ 支持图片和视频展示
- ✅ 平滑滚动和动画效果

## 浏览器支持

- Chrome/Edge（推荐）
- Firefox
- Safari
- 移动浏览器

## 许可证

MIT License
