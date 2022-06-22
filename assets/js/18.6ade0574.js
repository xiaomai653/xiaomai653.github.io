(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{490:function(t,a,s){"use strict";s.r(a);var r=s(16),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://about.gitlab.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitlab官网"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"docker安装gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装gitlab"}},[t._v("#")]),t._v(" docker安装gitlab")]),t._v(" "),s("h3",{attrs:{id:"_1-获取镜像列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取镜像列表"}},[t._v("#")]),t._v(" 1.获取镜像列表")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" search gitlab\n")])])]),s("h3",{attrs:{id:"_2-拉取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-拉取镜像"}},[t._v("#")]),t._v(" 2.拉取镜像")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull gitlab/gitlab-ce\n")])])]),s("h3",{attrs:{id:"_3-运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行"}},[t._v("#")]),t._v(" 3.运行")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -d  -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(":443 -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9980")]),t._v(":80 -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9922")]),t._v(":22 --name gitlab --restart always -v /home/dokcer/gitlab/config:/etc/gitlab -v /home/docker/gitlab/logs:/var/log/gitlab -v /home/docker/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest\n")])])]),s("blockquote",[s("p",[t._v("-d：后台运行"),s("br"),t._v("\n-p：将容器内部端口向外映射"),s("br"),t._v("\n--name：命名容器名称"),s("br"),t._v("\n-v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录"),s("br"),t._v("\n--restart always：自动重启")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("gitlab.rb")]),t._v(" "),s("div",{staticClass:"language-rb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rb"}},[s("code",[t._v("external_url "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://192.168.3.119:9980'")])]),t._v("\n\ngitlab_rails"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab_ssh_host'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.168.3.119'")])]),t._v("\n\ngitlab_rails"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab_shell_ssh_port'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9922")]),t._v("\n\ngitlab_rails"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time_zone'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asia/Shanghai'")])]),t._v("\n\ngitlab_rails"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gravatar_plain_url'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.gravatar.com/avatar/%{hash}?s=%{size}&d=identicon'")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitlab_rails['gravatar_ssl_url'] = 'https://secure.gravatar.com/avatar/%{hash}?s=%{size}&d=identicon'")]),t._v("\n")])])])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"docker-compose安装gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose安装gitlab"}},[t._v("#")]),t._v(" docker compose安装gitlab")]),t._v(" "),s("h3",{attrs:{id:"_1-创建yml文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建yml文件"}},[t._v("#")]),t._v(" 1.创建yml文件")]),t._v(" "),s("p",[s("code",[t._v("docker-compose-gitlab.yml")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.3'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gitlab")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gitlab/gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ce\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gitlab\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"80:80"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"443:443"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"222:22"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /home/docker/gitlab/config/gitlab.rb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/gitlab/gitlab.rb\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- /home/docker/gitlab/config/gitlab-secrets.json:/etc/gitlab/gitlab-secrets.json")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /home/docker/gitlab/data/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/opt/gitlab\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /home/docker/gitlab/logs/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/log/gitlab\n")])])]),s("h3",{attrs:{id:"_2-运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行"}},[t._v("#")]),t._v(" 2.运行")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" -f ./docker-compose-gitlab.yml up -d\n")])])]),s("blockquote",[s("p",[t._v("-d：后台运行"),s("br"),t._v("\n-f：指定yml文件")])])])}),[],!1,null,null,null);a.default=e.exports}}]);