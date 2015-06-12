#!/bin/sh
export JX_ARG_SEP="@"
jxsm install semver jxm --autoremove "*.gz@samples"
export JX_ARG_SEP=