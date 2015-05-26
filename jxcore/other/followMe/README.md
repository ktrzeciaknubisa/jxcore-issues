

# Info

This test compares result of `jxcore.monitor.followMe()` between JXcore 2.1.5, 2.3.3 and 2.3.5 (the newest) on MacOSX x64

# Start

```bash
$ go.sh
```

# Results

```bash
############ text for jx 215
Starting JXcore monitoring service.
JXcore monitoring is started.


__filename ./index.js
__dirname /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app
process.mainModule.filename /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app/test215.jx
monitor:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   495    0   495    0     0   147k      0 --:--:-- --:--:-- --:--:--  161k
[
    {
        "pid": 2816,
        "path": "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app/test215.jx",
        "argv": [
            "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/jx215",
            "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app/test215.jx"
        ],
        "config": null,
        "threadIDs": [
            -1
        ],
        "respawnAttemptID": 0
    }
]
Stopping JXcore monitoring service.
Monitoring service is closed.

############ text for jx 233
Starting JXcore monitoring service.
JXcore monitoring is started.


__filename /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app/index.js.jx
__dirname /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app
process.mainModule.filename /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/index.js.jx
monitor:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   492    0   492    0     0   150k      0 --:--:-- --:--:-- --:--:--  160k
[
    {
        "pid": 2827,
        "path": "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/index.js.jx",
        "argv": [
            "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/jx233",
            "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app/test233.jx"
        ],
        "config": null,
        "threadIDs": [
            -1
        ],
        "respawnAttemptID": 0
    }
]
Stopping JXcore monitoring service.
Monitoring service is closed.

############ text for jx 235
Starting JXcore monitoring service.
JXcore monitoring is started.


__filename /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app/index.js.jx
__dirname /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app
process.mainModule.filename /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/index.js.jx
monitor:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   492    0   492    0     0   137k      0 --:--:-- --:--:-- --:--:--  160k
[
    {
        "pid": 2836,
        "path": "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/index.js.jx",
        "argv": [
            "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/jx235",
            "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app/test235.jx"
        ],
        "config": null,
        "threadIDs": [
            -1
        ],
        "respawnAttemptID": 0
    }
]
Stopping JXcore monitoring service.
Monitoring service is closed.
```


# Conclusion

The `process.mainModule.filename` is different, not only with file name, also with parent directory:

2.1.5

```bash
    "path": "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app/test215.jx",
    process.mainModule.filename /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/app/test215.jx
```


2.3.3 and 2.3.5

```bash
    "path": "/Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/index.js.jx",
    process.mainModule.filename /Users/nubisa_krzs/Documents/GitHub/ktrzeciaknubisa/jxcore/issues/other/followMe/index.js.jx
```
