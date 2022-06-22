(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{496:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://nacos.io/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nacos官网"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"docker安装nacos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker安装nacos"}},[s._v("#")]),s._v(" docker安装nacos")]),s._v(" "),t("h3",{attrs:{id:"_1-获取镜像列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取镜像列表"}},[s._v("#")]),s._v(" 1.获取镜像列表")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search nacos\n")])])]),t("h3",{attrs:{id:"_2-拉取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-拉取镜像"}},[s._v("#")]),s._v(" 2.拉取镜像")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull nacos/nacos-server\n")])])]),t("h3",{attrs:{id:"_3-运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行"}},[s._v("#")]),s._v(" 3.运行")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d  -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v(":8848 --name nacos -v /home/docker/nacos/data/logs:/home/nacos/logs -v /home/docker/nacos/plugins/:/home/nacos/plugins nacos/nacos-server:latest\n")])])]),t("blockquote",[t("p",[s._v("-d：后台运行"),t("br"),s._v("\n-p：将容器内部端口向外映射"),t("br"),s._v("\n--name：命名容器名称"),t("br"),s._v("\n-v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录")])]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"docker-compose安装nacos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose安装nacos"}},[s._v("#")]),s._v(" docker compose安装nacos")]),s._v(" "),t("h3",{attrs:{id:"_1-创建yml文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建yml文件"}},[s._v("#")]),s._v(" 1.创建yml文件")]),s._v(" "),t("p",[t("code",[s._v("docker-compose-nacos.yml")])]),s._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.3'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nacos/nacos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server                                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 镜像`nacos/nacos-server:latest`")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always                                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定容器退出后的重启策略为始终重启")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nacos                                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器名为'nacos'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("                                                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据卷挂载路径设置,将本机目录映射到容器目录")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /home/docker/nacos/data/logs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/home/nacos/logs\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /home/docker/nacos/plugins/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/home/nacos/plugins\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - /home/docker/nacos/conf/:/home/nacos/conf/")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置环境变量,相当于docker run命令中的-e")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TZ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Asia/Shanghai\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("LANG")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" en_US.UTF"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("JVM_XMX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1g     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设定程序运行期间最大可占用的内存大小")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("JVM_XMS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1g     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设定程序启动时占用内存大小")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("JVM_XMN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 512m    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新生代大小")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      PREFER_HOST_MODE: hostname")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MODE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" standalone "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单机模式启动")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 映射端口")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8848:8848"')]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行"}},[s._v("#")]),s._v(" 2.运行")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" -f ./docker-compose-nacos.yml up -d\n")])])]),t("blockquote",[t("p",[s._v("-d：后台运行"),t("br"),s._v("\n-f：指定yml文件")])])])}),[],!1,null,null,null);a.default=e.exports}}]);