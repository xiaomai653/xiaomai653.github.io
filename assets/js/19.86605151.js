(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{491:function(s,t,a){"use strict";a.r(t);var e=a(16),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"docker安装ftp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装ftp"}},[s._v("#")]),s._v(" docker安装ftp")]),s._v(" "),a("h3",{attrs:{id:"_1-获取镜像列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取镜像列表"}},[s._v("#")]),s._v(" 1.获取镜像列表")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search vsftpd\n")])])]),a("h3",{attrs:{id:"_2-拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-拉取镜像"}},[s._v("#")]),s._v(" 2.拉取镜像")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull fauria/vsftpd\n")])])]),a("h3",{attrs:{id:"_3-运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行"}},[s._v("#")]),s._v(" 3.运行")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":20 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":21 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21100")]),s._v("-21110:21100-21110 --name "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FTP_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ftp -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FTP_PASS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ftp -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASV_ADDRESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".3.131 -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASV_MIN_POST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21100")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASV_MAX_POST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21110")]),s._v(" -v /home/docker/nginx/:/home/vsftpd fauria/vsftpd:latest\n")])])]),a("blockquote",[a("p",[s._v("-d：后台运行"),a("br"),s._v("\n-p：将容器内部端口向外映射"),a("br"),s._v("\n--name：命名容器名称"),a("br"),s._v("\n-v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"docker-compose安装ftp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose安装ftp"}},[s._v("#")]),s._v(" docker compose安装ftp")]),s._v(" "),a("h3",{attrs:{id:"_1-创建yml文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建yml文件"}},[s._v("#")]),s._v(" 1.创建yml文件")]),s._v(" "),a("p",[a("code",[s._v("docker-compose-ftp.yml")])]),s._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ftp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fauria/vsftpd\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ftp\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20:20"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"21:21"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"21100-21110:21100-21110"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /home/docker/nginx/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/home/vsftpd\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" FTP_USER=ftp\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" FTP_PASS=ftp\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" PASV_ADDRESS=192.168.3.131\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" PASV_MIN_POST=21100\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" PASV_MAX_POST=21110\n")])])]),a("h3",{attrs:{id:"_2-运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行"}},[s._v("#")]),s._v(" 2.运行")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" -f ./docker-compose-ftp.yml up -d\n")])])]),a("blockquote",[a("p",[s._v("-d：后台运行"),a("br"),s._v("\n-f：指定yml文件")])])])}),[],!1,null,null,null);t.default=n.exports}}]);