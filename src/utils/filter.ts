
const filterSelection = (node: any, select: string) => {
    switch (select) {
        case 'country':
            return node['comercio']['pais']
        case 'category':
            return node['categories']['nodes']['name']
        case 'estado':
            return node['comercio']['sucursales']
        case 'title':
            return node['title']
        default:
            return node[select]
    }
}

export const Filter = (nodes: Array<any>, filter, selection: string) => {

    const nodeFilter = (node) => {
        let validation = true;
        let validFilter = false;
        let select = filterSelection(node, selection);
        if (Array.isArray(select)) {
            validFilter = select.some((data) => data[selection].includes(filter))
            return validation && validFilter
        }
        if (select) validFilter = (select.includes(filter))
        return validation && validFilter
    }

    return (filter) ? nodes.filter(nodeFilter) : nodes;
}