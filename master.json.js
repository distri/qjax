window["distri/qjax:master"]({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2014 \n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n\n",
      "mode": "100644",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "content": "qjax\n====\n\nAjax with promises\n",
      "mode": "100644",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "content": "version: \"0.1.0\"\n",
      "mode": "100644"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "content": "QJax\n====\n\nTODO: I hope someone else has done this earlier and better...\n\nAjax with promises\n\n    Q = require \"q\"\n\n    updateProgress = (deferred) ->\n      (e) ->\n        if e.lengthComputable\n          deferred.notify(e.loaded / e.total)\n\n    module.exports =\n      post: (url, formData) ->\n        deferred = Q.defer()\n\n        request = new XMLHttpRequest()\n\n        request.open(\"POST\", url, true)\n\n        request.upload.onprogress = updateProgress(deferred) \n\n        request.onreadystatechange = (e) ->\n          if request.readyState is 4\n            if isSuccess(request)\n              deferred.resolve(true)\n            else\n              deferred.reject request.responseText\n\n        request.send(formData)\n\n        return deferred.promise\n\n      getJSON: ->\n      get: ->\n",
      "mode": "100644"
    }
  },
  "distribution": {
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\"};",
      "type": "blob"
    },
    "main": {
      "path": "main",
      "content": "(function() {\n  var Q, updateProgress;\n\n  Q = require(\"q\");\n\n  updateProgress = function(deferred) {\n    return function(e) {\n      if (e.lengthComputable) {\n        return deferred.notify(e.loaded / e.total);\n      }\n    };\n  };\n\n  module.exports = {\n    post: function(url, formData) {\n      var deferred, request;\n      deferred = Q.defer();\n      request = new XMLHttpRequest();\n      request.open(\"POST\", url, true);\n      request.upload.onprogress = updateProgress(deferred);\n      request.onreadystatechange = function(e) {\n        if (request.readyState === 4) {\n          if (isSuccess(request)) {\n            return deferred.resolve(true);\n          } else {\n            return deferred.reject(request.responseText);\n          }\n        }\n      };\n      request.send(formData);\n      return deferred.promise;\n    },\n    getJSON: function() {},\n    get: function() {}\n  };\n\n}).call(this);\n",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://www.danielx.net/editor/"
  },
  "version": "0.1.0",
  "entryPoint": "main",
  "repository": {
    "branch": "master",
    "default_branch": "master",
    "full_name": "distri/qjax",
    "homepage": null,
    "description": "Ajax with promises",
    "html_url": "https://github.com/distri/qjax",
    "url": "https://api.github.com/repos/distri/qjax",
    "publishBranch": "gh-pages"
  },
  "dependencies": {}
});