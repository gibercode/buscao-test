const _filterSelection = (node: any, select: string) => {
    switch (select) {
        case 'country':
            return node['commerce']['country']['slug']
        case 'categories':
            return node['categories']['nodes']
        case 'state':
            return node['commerce']['subsidiary']
        case 'title':
            return node['title']
        case 'outstanding':
            return node['commerce']['outstanding']
        default:
            return node[select]
    }
}

export const Filter = (nodes: Array<any>, filter, selection: string) => {

    const nodeFilter = (node) => {
        let validation = true;
        let validFilter = false;
        let select = _filterSelection(node, selection);
        if (Array.isArray(select)) {
            validFilter = select.some((data) => {
                if(data[selection]) return data[selection]['slug'].includes(filter)
                if(data['slug']) return data['slug'].includes(filter)
            })
            return validation && validFilter
        }
        if (typeof select == 'string') validFilter = (select.includes(filter))
        if (typeof select == 'boolean') validFilter = select == filter;
        return validation && validFilter
    }

    return (filter) ? nodes.filter(nodeFilter) : nodes;
}