QJax
====

TODO: I hope someone else has done this earlier and better...

Ajax with promises

    Q = require "q"

    updateProgress = (deferred) ->
      (e) ->
        if e.lengthComputable
          deferred.notify(e.loaded / e.total)

    module.exports =
      post: (url, formData) ->
        deferred = Q.defer()

        request = new XMLHttpRequest()

        request.open("POST", url, true)

        request.upload.onprogress = updateProgress(deferred) 

        request.onreadystatechange = (e) ->
          if request.readyState is 4
            if isSuccess(request)
              deferred.resolve(true)
            else
              deferred.reject request.responseText

        request.send(formData)

        return deferred.promise

      getJSON: ->
      get: ->
