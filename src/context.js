import React, { Component } from 'react';
import Client from './Contentful';

const SpaceContext = React.createContext();

class SpaceProvider extends Component {
    state = {
        spaces: [],
        sortedSpaces: [],
        featuredSpaces: [],
        loading: true,
        type: 'all',
        capacity: 1,
        minSize: 0,
        maxSize: false,
        ac: false
    };

    //get data from contentful
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "hiveOfficeSpace",
                order: "sys.createdAt"
            });
            let spaces = this.formatData(response.items);
            let featuredSpaces = spaces.filter(space => space.featured === true);
            let maxSize = Math.max(...spaces.map(item => item.size));

            this.setState({
                spaces: spaces,
                featuredSpaces : featuredSpaces,
                sortedSpaces: spaces,
                loading: false,
                maxSize
            })

        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData();
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url );

            let space = {...item.fields, images, id}
            return space;
        })
        return tempItems;
    }

    getSpace = (slug) => {
        let tempSpaces = [...this.state.spaces];
        const space = tempSpaces.find((space) => space.slug === slug);
        return space;
    }

    render() {
        return (
            <div>
                <SpaceContext.Provider
                    value = {{
                        ...this.state,
                        getSpace: this.getSpace,
                        handleChange: this.handleChange
                    }}
                >
                    {this.props.children}
                </SpaceContext.Provider>
            </div>
        );
    }
}

const SpaceConsumer = SpaceContext.Consumer;

export function withSpaceConsumer(Component) {
    return function consumerWrapper(props) {
        return <SpaceConsumer>
            {value => <Component {...props} context={value} />}
        </SpaceConsumer>
    }
}

export {SpaceProvider, SpaceConsumer, SpaceContext}