(this.webpackJsonpabout = this.webpackJsonpabout || []).push([[0], {
	13 : function(e, t, n) {
		e.exports = n(23)
	},
	18 : function(e, t, n) {},
	23 : function(e, t, n) {
		"use strict";
		n.r(t);
		var o = n(0),
		c = n.n(o),
		a = n(2),
		s = n.n(a),
		i = (n(18), n(11)),
		l = function() {
			var e = new Date,
			t = e.getHours(),
			n = e.getMinutes(),
			o = e.getSeconds();
			return "".concat(t).concat(n < 10 ? ":0": ":").concat(n).concat(o < 10 ? ":0": ":").concat(o)
		},
		r = ["Welcome to ".concat("\u4e00\u4e2a\u574f\u6389\u7684\u756a\u8304", "."), {
			type: "system",
			label: "System",
			content: "cd ".concat("\u4e00\u4e2a\u574f\u6389\u7684\u756a\u8304")
		},
		{
			type: "system",
			label: "System",
			content: "Thanks  vvvvvv for your visit, let me introduce myself."
		},
		{
			time: l(),
			type: "info",
			label: "Name:",
			content: "Simon Ma"
		},
		{
			time: l(),
			type: "info",
			label: "Sex:",
			content: "Male"
		},
		{
			time: l(),
			type: "info",
			label: "Age:",
			content: "23"
		},
		{
			time: l(),
			type: "info",
			label: "Email:",
			content: "simon@tomotoes.com"
		},
		{
			time: l(),
			type: "info",
			label: "Aim:",
			content: "Three goals as follows:"
		},
		{
			type: "black",
			label: "=> 1.",
			content: "To make outstanding contributions to open source."
		},
		{
			type: "black",
			label: "=> 2.",
			content: "Become a full stack engineer."
		},
		{
			type: "black",
			label: "=> 3.",
			content: "Find a good job."
		}],
		p = {
			dynamicList: {
				intro: {
					description: "Introducting myself again.",
					run: function(e) {
						var t = 0;
						return new Promise((function(n) {
							var o = setInterval((function() {
								e(r[t]),
								t++,
								r[t] || (clearInterval(o), n({
									type: "success",
									label: "Done",
									content: "Myself introduction is over!"
								}))
							}), 500)
						}))
					}
				},
				echo: {
					description: "Echoes input.",
					run: function(e, t) {
						return new Promise((function(n) {
							e({
								time: l(),
								label: "Echo",
								type: "success",
								content: t
							}),
							n({
								type: "success",
								label: "",
								content: ""
							})
						}))
					}
				},
				open: {
					description: "Open a specified url in a new tab.",
					run: function(e, t) {
						return new Promise((function(n) {
							t ? t.startsWith("http") ? (e({
								type: "success",
								label: "Success",
								content: "Opening"
							}), window.open(t, "_blank"), n({
								type: "success",
								label: "Done",
								content: "Page Opened!"
							})) : n({
								type: "error",
								label: "Error",
								content: "Please add `http` prefix!"
							}) : n({
								type: "error",
								label: "Error",
								content: "a url is required!"
							})
						}))
					}
				},
				gallery: {
					description: "Open my gallery in a new tab.",
					run: function(e) {
						return new Promise((function(t) {
							e({
								type: "success",
								label: "Success",
								content: "Opening"
							}),
							window.open("https://tomotoes.com/gallery/", "_blank"),
							t({
								type: "success",
								label: "Done",
								content: ":)"
							})
						}))
					}
				},
				weibo: {
					description: "Open my weibo in a new tab.",
					run: function(e) {
						return new Promise((function(t) {
							e({
								type: "success",
								label: "Success",
								content: "Opening"
							}),
							window.open("https://tomotoes.com/blog/weibo/", "_blank"),
							t({
								type: "success",
								label: "Done",
								content: ":)"
							})
						}))
					}
				},
				2048 : {
					description: "Open a 2048 Game in a new tab.",
					run: function(e) {
						return new Promise((function(t) {
							e({
								type: "success",
								label: "Success",
								content: "Opening"
							}),
							window.open("https://tomotoes.com/2048", "_blank"),
							t({
								type: "success",
								label: "Done",
								content: "Game Start!"
							})
						}))
					}
				},
				music: {
					description: "Open my favorite music in a new tab.",
					run: function(e) {
						return new Promise((function(t) {
							e({
								type: "success",
								label: "Success",
								content: "Opening"
							}),
							window.open("http://music.163.com/playlist?id=5376798456&userid=439040497", "_blank"),
							t({
								type: "success",
								label: "Done",
								content: "Game Start!"
							})
						}))
					}
				}
			},
			staticList: {
				contact: {
					description: "Return a list of my contact information.",
					list: [{
						type: "info",
						label: "Email:",
						content: "`simon@tomotoes.com`"
					},
					{
						type: "info",
						label: "Github:",
						content: "`https://github.com/tomotoes`"
					},
					{
						type: "info",
						label: "Twitter:",
						content: "`https://twitter.com/simon_aking`"
					},
					{
						type: "info",
						label: "Telegram:",
						content: "`https://t.me/tomotoes`"
					}]
				},
				whoami: {
					description: "Return a piece of code about tomotoes.",
					list: [{
						type: "success",
						label: "Compiled",
						content: "1   const"
					},
					{
						type: "success",
						label: "Compiled",
						content: '2     tomatoes = "\u756a\u8304",'
					},
					{
						type: "success",
						label: "Compiled",
						content: '3     tomotoes = "\u574f\u6389\u7684\u756a\u8304";'
					},
					{
						type: "success",
						label: "Compiled",
						content: "4   const myTomotoes = new Promise((resolve, reject) => {"
					},
					{
						type: "warning",
						label: "Compiled",
						content: '5     tomatoes === "\u756a\u8304"?resolve(tomotoes):reject(tomatoes)'
					},
					{
						type: "success",
						label: "Compiled",
						content: '6   }).then(()=>"My tomatoes,I\'m coming!")'
					},
					{
						type: "error",
						label: "SyntaxError",
						content: '7   .catch(()=>"What the f*ck!");'
					}]
				},
				skill: {
					description: "Return a list of my skills and my rating of them.",
					list: [{
						type: "success",
						label: "A",
						content: "\xb7 JavaScript 90/100"
					},
					{
						type: "success",
						label: "A",
						content: "\xb7 TypeScript 90/100"
					},
					{
						type: "success",
						label: "A",
						content: "\xb7 Go 80/100"
					},
					{
						type: "success",
						label: "A",
						content: "\xb7 Java 80/100"
					},
					{
						type: "success",
						label: "A",
						content: "\xb7 Kotlin 80/100"
					},
					{
						type: "warning",
						label: "B",
						content: "\xb7 Python 70/100"
					},
					{
						type: "warning",
						label: "B",
						content: "\xb7 C 70/100"
					},
					{
						type: "warning",
						label: "B",
						content: "\xb7 Shell 70/100"
					},
					{
						type: "error",
						label: "C",
						content: "\xb7 C# 60/100"
					},
					{
						type: "error",
						label: "C",
						content: "\xb7 Rust 60/100"
					},
					{
						type: "error",
						label: "C",
						content: "\xb7 Scala 60/100"
					},
					{
						type: "error",
						label: "C",
						content: "\xb7 Lua 60/100"
					},
					{
						type: "error",
						label: "C",
						content: "\xb7 Haskell 60/100"
					},
					{
						type: "error",
						label: "C",
						content: "\xb7 Ruby 60/100"
					},
					{
						type: "black",
						label: "D",
						content: "\xb7 CSS -999/100"
					}]
				},
				cartoon: {
					description: "Return a list of cartoons that I have watched.",
					list: [" \u300a \u6d77\u7ef5\u5b9d\u5b9d \u300b", " \u300a \u4e00\u4eba\u4e4b\u4e0b \u300b", " \u300a \u9547\u9b42\u8857 \u300b", " \u300a \u4e00\u62f3\u8d85\u4eba \u300b", " \u300a \u67d0\u79d1\u5b66\u7684\u8d85\u7535\u78c1\u70ae \u300b", " \u300a \u7f57\u5c0f\u9ed1\u6218\u8bb0 \u300b", " \u300a \u9b3c\u706d\u4e4b\u5203 \u300b", " \u300a \u8f89\u591c\u5927\u5c0f\u59d0\u60f3\u8ba9\u6211\u544a\u767d \u300b", " \u300a \u7b28\u5973\u5b69 \u300b", " \u300a \u57c3\u7f57\u8292\u963f\u8001\u5e08 \u300b", " \u300a Charlotte \u300b", " \u300a \u7075\u7b3c \u300b", " \u300a  \u5e72\u7269\u59b9\uff01\u5c0f\u57cb \u300b", " \u300a \u8fd9\u4e2a\u52c7\u8005\u660e\u660e\u8d85\u5f3a\u5374\u8fc7\u5206\u614e\u91cd \u300b", " \u300a \u5929\u6c14\u4e4b\u5b50 \u300b", " \u300a \u56e0\u4e3a\u592a\u6015\u75db\u5c31\u5168\u70b9\u9632\u5fa1\u529b\u4e86 \u300b", " \u300a \u56db\u6708\u662f\u4f60\u7684\u8c0e\u8a00 \u300b", " \u300a \u590f\u76ee\u53cb\u4eba\u5e10 \u300b", " \u300a \u5492\u672f\u56de\u6218 \u300b", " \u300a \u5c0f\u6797\u5bb6\u7684\u9f99\u5973\u4ec6 \u300b", " \u300a \u9f50\u6728\u6960\u96c4\u7684\u707e\u96be \u300b", " \u300a \u5173\u4e8e\u5b8c\u5168\u542c\u4e0d\u61c2\u8001\u516c\u5728\u8bf4\u4ec0\u4e48\u7684\u4e8b \u300b"]
				},
				book: {
					description: "Return a list of books that I have read.",
					list: [" \u300a JavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1 \u300b--- Nicholas C.Zakas ", " \u300a JavaScript \u6807\u51c6\u53c2\u8003\u6559\u7a0b \u300b--- \u962e\u4e00\u5cf0 ", " \u300a ECMAScript 6 \u5165\u95e8 \u300b--- \u962e\u4e00\u5cf0 ", " \u300a JavaScript DOM \u9ad8\u7ea7\u7a0b\u5e8f\u7f16\u7a0b\u827a\u672f \u300b--- Jeremy Keith ", " \u300a \u950b\u5229\u7684 jQuery \u300b--- \u5355\u4e1c\u6797 ", " \u300a CSS \u63ed\u79d8 \u300b--- LEA VEROU ", " \u300a CSS \u6743\u5a01\u6307\u5357 \u300b--- Eric A.Meyer ", " \u300a HTML5 \u9ad8\u6027\u80fd\u6307\u5357 \u300b--- \u5e03\u83b1\u6069\u7279/\u743c\u65af ", " \u300a C# \u672c\u8d28\u8bba \u300b--- MarkMichaelis ", " \u300a C# \u5165\u95e8\u7ecf\u5178 2015 \u300b--- karli ", " \u300a C# \u591a\u7ebf\u7a0b\u7f16\u7a0b\u5b9e\u6218 \u300b--- \u963f\u683c\u4f5b\u6e29 ", " \u300a C primer plus(\u7b2c\u516d\u7248) \u300b--- Stephen Prata ", " \u300a \u7b97\u6cd5\u5bfc\u8bba \u300b--- Thomas H.Cormen... ", " \u300a \u7b97\u6cd5\u7ade\u8d5b\u5165\u95e8\u7ecf\u5178(\u7b2c\u4e00\u7248) \u300b--- \u5218\u6c5d\u4f73 ", " \u300a \u7b97\u6cd5\u7ade\u8d5b\u5165\u95e8\u7ecf\u5178(\u7b2c\u4e8c\u7248) \u300b--- \u5218\u6c5d\u4f73 ", " \u300a Vim \u5b9e\u6218\u6280\u5de7 \u300b--- Drew Neil ", " \u300a \u4f60\u4e0d\u77e5\u9053\u7684 JavaScript-\u4e0b \u300b--- Kyle Simpson ", " \u300a Linux \u547d\u4ee4\u884c\u5927\u5168 \u300b--- William E.shotts\uff0cJr ", " \u300a \u5199\u7ed9\u5927\u5fd9\u4eba\u770b\u7684 Java \u6838\u5fc3\u6280\u672f \u300b--- CayS.Horstmann ", " \u300a Python Cookbook \u300b--- Alex Martelli... ", " \u300a \u6697\u65f6\u95f4 \u300b--- \u5218\u672a\u9e4f ", "  \u300a Haskell \u8da3\u5b66\u6307\u5357 \u300b--- \u65af\u6d1b\u6587\u5c3c\u4e9a ", " \u300a \u6570\u5b66\u4e4b\u7f8e\uff08\u7b2c\u4e8c\u7248\uff09 \u300b--- \u5434\u519b ", " \u300a Linux Bash \u7f16\u7a0b\u4e0e\u811a\u672c\u5e94\u7528\u5b9e\u6218 \u300b--- \u9a6c\u7389\u519b \u90dd\u519b ", " \u300a \u7a0b\u5e8f\u5458\u7684\u5450\u558a \u300b--- Steve Yegge ", " \u300a The way to go \u300b--- \u65e0\u95fb ", " \u300a The Go Programming Language \u300b--- Brian W. Kernighan... ", " \u300a Java \u7f16\u7a0b\u601d\u60f3 \uff08\u7b2c4\u7248\uff09 \u300b--- Bruce Eckel ", " \u300a Kotlin \u6838\u5fc3\u7f16\u7a0b \u300b--- \u6c34\u6ef4\u56e2\u961f ", " \u300a Easy Kotlin \u300b--- JackChan ", " \u300a HTTP \u56fe\u89e3 \u300b--- \u4e0a\u91ce\u5ba3 ", " \u300a \u5218\u5927\u732b\u7684\u8d22\u5bcc\u4e4b\u65c5 \u300b--- \u5218\u6b23 ", " \u300a ZOO \u300b--- \u4e59\u4e00 ", " \u300a macOS\u6548\u7387\u624b\u518c \u300b--- \u5c11\u6570\u6d3e ", " \u300a \u6df1\u5165\u7406\u89e3 TypeScript \u300b--- Basarat ", " \u300a \u6dd8\u5b9d\u6280\u672f\u8fd9\u5341\u5e74 \u300b--- \u5b50\u67f3 ", " \u300a \u5927\u578b\u7f51\u7ad9\u6280\u672f\u67b6\u6784 \u300b--- \u674e\u667a\u6167 ", " \u300a \u5206\u5e03\u5f0f\u670d\u52a1\u67b6\u6784\uff1a\u539f\u7406\u3001\u8bbe\u8ba1\u4e0e\u5b9e\u6218 \u300b--- \u674e\u8273\u9e4f / \u6768\u5f6a ", " \u300a \u524d\u7aef\u67b6\u6784\uff1a\u4ece\u5165\u95e8\u5230\u5fae\u524d\u7aef \u300b--- \u9ec4\u5cf0\u8fbe\uff08Phodal\uff09 ", " \u300a \u751f\u6d3b\u8499\u592a\u5947 \u300b--- \u5929\u7136 ", " \u300a \u524d\u65b9\u7684\u8def \u300b--- \u962e\u4e00\u5cf0 ", " \u300a \u672a\u6765\u4e16\u754c\u7684\u5e78\u5b58\u8005 \u300b--- \u962e\u4e00\u5cf0 ", " \u300a \u5929\u624d\u5728\u5de6\u75af\u5b50\u5728\u53f3 \u300b--- \u9ad8\u94ed "]
				}
			}
		};
		s.a.render(c.a.createElement(c.a.StrictMode, null, c.a.createElement(i.a, {
			className: "fade",
			cmd: p,
			config: {
				prompt: "\u279c  ~ ",
				version: "1.0.0",
				initialDirectory: "\u4e00\u4e2a\u574f\u6389\u7684\u756a\u8304",
				bootCmd: "intro"
			}
		})), document.getElementById("app"));
		var u = document.querySelectorAll(".fade");
		window.addEventListener("DOMContentLoaded", (function() {
			u.forEach((function(e) {
				return e.classList.add("in")
			}))
		})),
		window.addEventListener("beforeunload", (function() {
			u.forEach((function(e) {
				return e.classList.remove("in")
			}))
		}))
	}
},
[[13, 1, 2]]]);
//# sourceMappingURL=main.58d207a1.chunk.js.map
