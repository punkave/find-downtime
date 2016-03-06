# find-downtime

```
gunzip -c mysite_access_log* | find-downtime [--seconds=120]
```

`find-downtime` is a utility application that identifies periods of downtime in Apache log data piped to its standard input and outputs a report of each period of more than 60 seconds with no traffic, or as specified with the `seconds` option.

This is of course only a useful metric on sites that are extremely unlikely to have 60 seconds without traffic under normal circumstances.
