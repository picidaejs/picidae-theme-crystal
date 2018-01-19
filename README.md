# crystal
Crystal is a elegant theme of picidae 

### Preview

[Claiyre's blog](https://claiyre.github.io/)


### Installation

1. change dir to **picidae root directory**, if you have not yet inited picidae, go [there](https://github.com/picidaejs/picidaejs)
```
cd [picideaBlogRoot]
```
2. run `npm install --save picidae-theme-crystal`
3. edit `./picidae.config.js`
```
...
theme: "picidae-theme-crystal",
...
```

4. run `picidae start/build` to see the new blog

5. theme config

default config
```
pageSize: 6 ,
title: 'Claiyre的个人博客',
// the text in the header of blog pages
blogName: false,
// put your avatar image under ./extra
avatarUrl: 'avatar.png'  
// crystal use the gitment system
gitment: {
    owner: 'Claiyre',
    repo: 'Claiyre.github.io',
    oauth: {
      client_id: 'xxx',
      client_secret: 'xxxx'
    }
  }
```

**You can also create a `theme.config.js` file under the root directory to overwrite the default config**