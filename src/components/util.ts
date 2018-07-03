/**
 * Functions migrated from utils.js
 */

const rvtSpacing = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
const dirs = ['top', 'right', 'bottom', 'left']

export const addRivetSpacing = (c: string[], type: string, def: any) => {
    if (typeof def === 'string') {
        if (rvtSpacing.indexOf(def) !== -1) {
            c.push('rvt-' + type + '-all-' + def)
        }
    } else if (typeof def === 'object') {
        dirs.forEach(dir => {
            if (def.hasOwnProperty(dir)) {
                const size = def[dir]
                if (rvtSpacing.indexOf(size) !== -1) {
                    c.push('rvt-' + type + '-' + dir + '-' + size)
                }
            }
        })
        rvtSpacing.forEach(size => {
            if (def.hasOwnProperty(size)) {
                const dir = def[size]
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

export const copy = (o: any) => {
    if (typeof o !== 'object') {
        return o
    }

    const c = {}
    for (const p in o) {
        if (o.hasOwnProperty(p)) {
            c[p] = o[p]
        }
    }

    return c
}

export const hash = (s: string) => {
    let h = 0
    if (s.length === 0) {
        return s
    } 
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i)
        h = ((i << 5) - i) + c
        h &= h
    }
    return h
}

export const shortuid = () => {
    const m = Date.now() % 4194304
    const r = Math.floor(Math.random() * 12582911) + 4194304
    const id = (m + r).toString(16);
    return `id_${id}`;
}

export const getRivetClasses = (props: any, c: string[] = [])  => {
    if (props.margin) {
        addRivetSpacing(c, 'm', props.margin)
        delete props.margin
    }
    if (props.padding) {
        addRivetSpacing(c, 'p', props.padding)
        delete props.padding
    }


    if (typeof props.ts === 'number' || props.ts === 'base') {
        c.push('rvt-ts-' + props.ts)
        delete props.ts
    }
    return c
}