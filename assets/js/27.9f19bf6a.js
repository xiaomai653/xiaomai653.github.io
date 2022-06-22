(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{499:function(s,a,t){"use strict";t.r(a);var e=t(16),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://www.elastic.co/cn/logstash/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Logstash官网"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"docker安装logstash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker安装logstash"}},[s._v("#")]),s._v(" docker安装logstash")]),s._v(" "),t("h3",{attrs:{id:"_1-获取镜像列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取镜像列表"}},[s._v("#")]),s._v(" 1.获取镜像列表")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search logstash\n")])])]),t("h3",{attrs:{id:"_2-拉取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-拉取镜像"}},[s._v("#")]),s._v(" 2.拉取镜像")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull logstash:6.4.3\n")])])]),t("h3",{attrs:{id:"_3-运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行"}},[s._v("#")]),s._v(" 3.运行")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d  -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5044")]),s._v(":5044 --name logstash -v /home/docker/logstash/config/logstash.yml:/usr/share/logstash/config/logstash.yml -v /home/docker/logstash/conf.d/:/usr/share/logstash/conf.d logstash:6.4.3\n")])])]),t("blockquote",[t("p",[s._v("-d：后台运行"),t("br"),s._v("\n-p：将容器内部端口向外映射"),t("br"),s._v("\n--name：命名容器名称"),t("br"),s._v("\n-v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("logstash.yml")]),s._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#http.host: "0.0.0.0"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#xpack.monitoring.elasticsearch.url: http://elasticsearch:9200")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path.config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /usr/share/logstash/conf.d/"),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("*.conf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path.logs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /usr/share/logstash/logs\n")])])])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("syslog.conf")]),s._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('input {\n    tcp {\n        port => 5044\n        codec => "json_lines"\n    }\n}\n\noutput {\n  elasticsearch { \n    action => "index"\n    hosts => "elasticsearch:9200"\n    index => "zksc-core-logs-%{+YYYY.MM.dd}"\n }\n}\n')])])])]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"docker-compose安装logstash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose安装logstash"}},[s._v("#")]),s._v(" docker compose安装logstash")]),s._v(" "),t("h3",{attrs:{id:"_1-创建yml文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建yml文件"}},[s._v("#")]),s._v(" 1.创建yml文件")]),s._v(" "),t("p",[t("code",[s._v("docker-compose-logstash.yml")])]),s._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.3'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logstash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("images")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" logstash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6.4.3\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" logstash\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 5044"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5044")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /home/docker/logstash/config/logstash.yml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/logstash/config/logstash.yml\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /home/docker/logstash/conf.d/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/logstash/conf.d\n")])])]),t("h3",{attrs:{id:"_2-运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行"}},[s._v("#")]),s._v(" 2.运行")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" -f ./docker-compose-logstash.yml up -d\n")])])]),t("blockquote",[t("p",[s._v("-d：后台运行"),t("br"),s._v("\n-f：指定yml文件")])])])}),[],!1,null,null,null);a.default=n.exports}}]);