# GET /api/v1/healthcheck

+ Request

    + Headers

            Accept-Encoding: gzip, deflate, br
            Cookie: bildschirm=eyJmbGFzaCI6e30sInBhc3Nwb3J0Ijp7InVzZXIiOiJtYXQifX0=; bildschirm.sig=p7RggYxPbTbtWtCL0jT--g8fyQc



+ Response 200 (application/json; charset=utf-8)

    + Headers

            X-Powered-By: bildschirm
            Etag: W/"3a-AS0/S+G+EBFcDB10mTNV+2I6K3Y"
            Vary: Accept-Encoding

    + Body

            {"status":"ok","errorRate":0,"plugins":{"telemetry":"ok"}}


# POST /api/v1/authenticate?type=cookie

+ Request (application/json; charset=utf-8)

    + Headers

            Accept-Encoding: gzip, deflate, br
            Cookie: bildschirm=eyJmbGFzaCI6e30sInBhc3Nwb3J0Ijp7InVzZXIiOiJtYXQifX0=; bildschirm.sig=p7RggYxPbTbtWtCL0jT--g8fyQc

    + Body

            {
                "username": "mat",
                "password": "mat"
            }

+ Response 404 (text/html; charset=utf-8)

    + Headers

            X-Content-Type-Options: nosniff
            X-Powered-By: bildschirm
            Content-Security-Policy: default-src 'none'
            Vary: Accept-Encoding

    + Body

            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="utf-8">
            <title>Error</title>
            </head>
            <body>
            <pre>Cannot POST /api/v1/authenticate</pre>
            </body>
            </html>
            


# POST /api/v1/logout

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: bildschirm=eyJmbGFzaCI6e30sInBhc3Nwb3J0Ijp7InVzZXIiOiJtYXQifX0=; bildschirm.sig=p7RggYxPbTbtWtCL0jT--g8fyQc

    + Body

            {
                "username": "mat",
                "password": "mat"
            }

+ Response 404 (text/html; charset=utf-8)

    + Headers

            X-Content-Type-Options: nosniff
            X-Powered-By: Express
            Content-Security-Policy: default-src 'none'

    + Body

            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="utf-8">
            <title>Error</title>
            </head>
            <body>
            <pre>Cannot POST /api/v1/logout</pre>
            </body>
            </html>
            


# GET /api/v1/services/admin-controls

+ Request

    + Headers

            Cookie: bildschirm=eyJmbGFzaCI6e30sInBhc3Nwb3J0Ijp7InVzZXIiOiJtYXQifX0=; bildschirm.sig=p7RggYxPbTbtWtCL0jT--g8fyQc



+ Response 200 (application/json; charset=utf-8)

    + Headers

            Etag: W/"3b-pEQEYEjKN9cxk3X9SPVuzSj+etY"
            X-Powered-By: Express

    + Body

            {"startedAt":"2022-03-19T05:03:33.194Z","restarting":false}


# POST /api/v1/services/admin-controls/actions/restart

+ Request

    + Headers

            Cookie: bildschirm=eyJmbGFzaCI6e30sInBhc3Nwb3J0Ijp7InVzZXIiOiJtYXQifX0=; bildschirm.sig=p7RggYxPbTbtWtCL0jT--g8fyQc



+ Response 200 (application/json; charset=utf-8)

    + Headers

            Etag: W/"2f-bVMm9N8i9oyW2LFK8xYyilJsZ00"
            X-Powered-By: Express

    + Body

            {"result":{"restartIn":2000,"restarting":true}}


# GET /api/v1/services/theme

+ Request

    + Headers

            Cookie: bildschirm=eyJmbGFzaCI6e30sInBhc3Nwb3J0Ijp7InVzZXIiOiJtYXQifX0=; bildschirm.sig=p7RggYxPbTbtWtCL0jT--g8fyQc



+ Response 200 (application/json; charset=utf-8)

    + Headers

            Etag: W/"12-AoRF9l4v0tH1trsJvh45mjO3iLg"
            X-Powered-By: Express

    + Body

            {"theme":"purple"}


# POST /api/v1/services/theme/actions/choose

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: bildschirm=eyJmbGFzaCI6e30sInBhc3Nwb3J0Ijp7InVzZXIiOiJtYXQifX0=; bildschirm.sig=p7RggYxPbTbtWtCL0jT--g8fyQc

    + Body

            {
                "theme": "purple"
            }

+ Response 200 (application/json; charset=utf-8)

    + Headers

            Etag: W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"
            X-Powered-By: Express

    + Body

            {}


# GET /api/v1/services/telemetry

+ Request

    + Headers

            Cookie: bildschirm=eyJmbGFzaCI6e30sInBhc3Nwb3J0Ijp7InVzZXIiOiJtYXQifX0=; bildschirm.sig=p7RggYxPbTbtWtCL0jT--g8fyQc



+ Response 200 (application/json; charset=utf-8)

    + Headers

            Etag: W/"2b8-rLfJ/WgbVTbn+CPMYRSzusfU0eA"
            X-Powered-By: Express

    + Body

            {"stats":{"deviceName":"Bildschirm","version":"0.3.0","uiVersion":"MAIN","system":{"manufacturer":"Apple Inc.","model":"iMac12,1"},"cpu":{"manufacturer":"Intel","brand":"Core™ i5-2400S","cores":[{"load":28.507014028056112},{"load":22.945891783567134},{"load":22.984476715072606},{"load":22.483725588382576}],"speedMax":2.5,"mainTemperature":-1,"currentLoad":24.229902329075884},"os":{"platform":"darwin","distro":"Mac OS X","version":"10.13.6","name":"macOS High Sierra","architecture":"x64","hostname":"imac.local"},"memory":{"total":8589934592,"free":521338880,"used":8068595712},"network":{"internalIPv4":"192.168.0.101","publicIPv4":"46.253.241.213","mac":"3c:07:54:12:91:b3","speed":100}}}


# GET /api/v1/services/telemetry

+ Request

    + Headers

            Authorization: 
            Cookie: bildschirm=eyJmbGFzaCI6e30sInBhc3Nwb3J0Ijp7InVzZXIiOiJtYXQifX0=; bildschirm.sig=p7RggYxPbTbtWtCL0jT--g8fyQc



+ Response 200 (application/json; charset=utf-8)

    + Headers

            Etag: W/"29b-ZoaJL0U/1J0saIPyAmbF6pwyTj8"
            X-Powered-By: Express

    + Body

            {"stats":{"deviceName":"Bildschirm","version":"0.3.0","uiVersion":"MAIN","system":{"manufacturer":"Apple Inc.","model":"iMac12,1"},"cpu":{"manufacturer":"Intel","brand":"Core™ i5-2400S","cores":[{"load":33.13343328335832},{"load":27.127127127127125},{"load":26.3},{"load":26.05}],"speedMax":2.5,"mainTemperature":-1,"currentLoad":28.153519189898734},"os":{"platform":"darwin","distro":"Mac OS X","version":"10.13.6","name":"macOS High Sierra","architecture":"x64","hostname":"imac.local"},"memory":{"total":8589934592,"free":20742144,"used":8569192448},"network":{"internalIPv4":"192.168.0.101","publicIPv4":"194.126.177.56","mac":"3c:07:54:12:91:b3","speed":100}}}


