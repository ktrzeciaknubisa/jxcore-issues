/**
 * Created by Nubisa Inc. on 2/4/14.
 */


var shared = jxcore.store.shared;
var sidPrefix = "counters_afda,fbj";
var sidKnown = sidPrefix + "_known";

var get = function (sid) {
    sid = sidPrefix + sid;
    if (!shared.exists(sid)) {
        return { min: Number.MAX_VALUE, max: Number.MIN_VALUE, cnt: 0 };
    } else {
        var str = shared.read(sid);
        return JSON.parse(str);
    }
};

var set = function (sid, json) {
    sid = sidPrefix + sid;
    var str = JSON.stringify(json);
    shared.set(sid, str);
};

var getKnownSids = function () {
    if (!shared.exists(sidKnown)) {
        return {};
    } else {
        var str = shared.read(sidKnown);
        return JSON.parse(str);
    }
};

var setKnownSids = function (json) {
    var str = JSON.stringify(json);
    shared.set(sidKnown, str);
};

exports.add = function (sid, id) {
    var items = get(sid);
    items.cnt++;

    if (!items[id]) {
        items[id] = 1;
    } else {
        items[id]++;
    }
    items.min = Math.min(items.min, id);
    items.max = Math.max(items.max, id);

    set(sid, items);

    var known = getKnownSids();
    if (!known[sid]) {
        known[sid] = true;
        setKnownSids(known);
    }
};


exports.getCount = function (sid) {
    if (!shared.exists(sidPrefix + sid)) {
        return 0;
    }

    var items = get(sid);
    return items.cnt;
//    var cnt = 0;
//    for (var a = items.min; a <= items.max; a++) {
//        if (items[a]) {
//            cnt++;
//        }
//    }
//    return cnt;
};

exports.check = function (sid, min, max) {
    if (!shared.exists(sidPrefix + sid)) {
        console.log("No entries for counters ", sid);
        return;
    }

    var items = get(sid);
    var missed = [];
    var repeated = [];
    for (var a = min; a <= max; a++) {
        if (!items[a]) {
            missed.push(a);
        } else if (items[a] > 1) {
            repeated.push({ id: a, cnt: items[a]});
        }
    }

    console.log("Missed counters for ", sid, missed.length ? missed.join(",") : "none missed");
    if (repeated.length) {
        console.log("Repeated counters for ", sid, repeated.join(","));
    }
};


exports.checkKnown = function (min, max) {
    var known = getKnownSids();
    var cnt = 0;
    for (var sid in known) {
        if (cnt==0) {
            console.log("Checking known sids in counters:");
        }
        exports.check(sid, min, max);
        cnt++;
    }
};

exports.dumpMsgs = function (msgs, sid, caption, display) {

    if (!msgs.starts) {
        for (var clid in msgs) {
            exports.dumpMsgs(msgs[clid], sid, caption + " " + clid, display);
        }
        return;
    }

    var min = 10000;
    var max = 0;
    for (var id in msgs) {
        if (id == "starts" || id == "ends" || id == "undefined") {
            continue;
        }
        min = Math.min(min, id);
        max = Math.max(max, id);

        if (sid) {
            exports.add(sid, id);
        }
    }
    if (!display) {
        return;
    }

    var starts_ok = msgs.starts == min;
    var ends_ok = msgs.ends == max;

    var s = caption ? caption : "Messages dump. ";
    if (starts_ok) {
        s += ", starts at " + min;
    } else {
        s += ", starts at " + msgs.starts + " but min = " + min;
    }
    if (ends_ok) {
        s += ", ends at " + max;
    } else {
        s += ", ends at " + msgs.ends + " but max = " + max;
    }
    console.log(s);
};