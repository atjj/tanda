import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_ID = gql`
    query Barcode {
        barcode(id: 365) {
            id
            barcodeValue
            title
            description
            deleted
            sellingPrice
            slug
            archived
            createdAt
            mute
            discountedPrice
            cost
            tags
            characteristic
            category {
                id
                name
                slug
                icon
                icon1
                isActive
                prioritization
                inTrend
                lft
                rght
                treeId
                level
                parent {
                    id
                    name
                    slug
                    icon
                    icon1
                    isActive
                    prioritization
                    inTrend
                    lft
                    rght
                    treeId
                    level
                }
            }
            images {
                id
                url
            }
            sizes {
                edges {
                    node {
                        id
                        name
                        value
                    }
                }
            }
        }
    }

`