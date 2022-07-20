import React, { Component } from 'react';
import { Query } from '@apollo/react-components';
import { CATEGORIES } from '../../../queries/queryCategories'

export default class Categories extends Component {
            
    render () {
        return (
            <Query query={CATEGORIES}>
                {({ loading, error, data}) => {
                    if (loading) return 'Loading...'
                    if (error) return 'ERROR!'
                    
                    return data.categories.map((item) => {
                        return <div>{item.name}</div>
                    })
                }}
            </Query>
        )
    }
}