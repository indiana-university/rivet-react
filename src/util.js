const rvtSpacing = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
const dirs = ['top', 'right', 'bottom', 'left']

function addRivetSpacing(c, type, def) {
    if (typeof def === 'string') {
        if (rvtSpacing.indexOf(def) !== -1) {
            c.push('rvt-' + type + '-all-' + def)
        }
    } else if (typeof def === 'object') {
        dirs.forEach(dir => {
            if (def.hasOwnProperty(dir)) {
                var size = def[dir]
                if (rvtSpacing.indexOf(size) !== -1) {
                    c.push('rvt-' + type + '-' + dir + '-' + size)
                }
            }
        })
        rvtSpacing.forEach(size => {
            if (def.hasOwnProperty(size)) {
                var dir = def[size]
                if (Array.isArray(dir)) {
                    dir.forEach(d => {
                        if (dirs.indexOf(d) !== 0) {
                            c.push('rvt-' + type + '-' + d + '-' + size)
                        }
                    })
                } else if (dirs.indexOf(dir) !== 0) {
                    c.push('rvt-' + type + '-' + dir + '-' + size)
                }
            }
        })
    }
}

export function copy(o) {
    if (typeof o !== 'object') {
        return o
    }

    var c = {}
    for (var p in o) {
        if (o.hasOwnProperty(p)) {
            c[p] = o[p]
        }
    }

    return c
}

export function hash(s) {
    var h = 0
    if (s.length === 0) return s
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i)
        h = ((i << 5) - i) + c
        h = h & h
    }
    return h
}

export function shortuid() {
    var m = Date.now() % 4194304
    var r = Math.floor(Math.random() * 12582911) + 4194304
    return (m + r).toString(16)
}

export function getRivetClasses(props, c = []) {
    if (props.margin) {
        addRivetSpacing(c, 'm', props.margin)
        delete props.margin
    }
    if (props.padding) {
        addRivetSpacing(c, 'p', props.padding)
        delete props.padding
    }

    // replace booleans with strings to prevent console errors about <element prop=true />
    if (props.ordered) {
        props.ordered = "true"
    }

    if (props.plain) {
        props.plain = "true"
    }

    if (props.stripes) {
        props.stripes = "true"
    }


    if (typeof props.ts === 'number' || props.ts === 'base') {
        c.push('rvt-ts-' + props.ts)
        delete props.ts
    }
    return c
}