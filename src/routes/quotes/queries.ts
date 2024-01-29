import gql from "graphql-tag";

export const QUOTES_TABLE_QUERY = gql`
    query QuotesTable(
        $filter: QuoteFilter!
        $sorting: [QuoteSort!]!
        $paging: OffsetPaging!
    ) {
        quotes(filter: $filter, sorting: $sorting, paging: $paging) {
            nodes {
                id
        title
        status
        description
        subTotal
        total
        tax
        createdAt
        items {
            title
            unitPrice
            quantity
            discount
            totalPrice
        }
        company {
            id
            name
            country
            website
            avatarUrl
        }
        salesOwner {
            id
            name
        }
        contact {
            id
            name
        }
            }
            totalCount
        }
    }
`;

export const QUOTES_GET_QUOTE_QUERY = gql`
    query QuotesGetQuote($id: ID!) {
        quote(id: $id) {
            id
        title
        status
        description
        subTotal
        total
        tax
        createdAt
        items {
            title
            unitPrice
            quantity
            discount
            totalPrice
        }
        company {
            id
            name
            country
            website
            avatarUrl
        }
        salesOwner {
            id
            name
        }
        contact {
            id
            name
        }
        }
    }
`;

export const QUOTES_CREATE_QUOTE_MUTATION = gql`
    mutation QuotesCreateQuote($input: CreateOneQuoteInput!) {
        createOneQuote(input: $input) {
            id
        title
        status
        description
        subTotal
        total
        tax
        createdAt
        items {
            title
            unitPrice
            quantity
            discount
            totalPrice
        }
        company {
            id
            name
            country
            website
            avatarUrl
        }
        salesOwner {
            id
            name
        }
        contact {
            id
            name
        }
        }
    }
`;

export const QUOTES_UPDATE_QUOTE_MUTATION = gql`
    mutation QuotesUpdateQuote($input: UpdateOneQuoteInput!) {
        updateOneQuote(input: $input) {
            id
        title
        status
        description
        subTotal
        total
        tax
        createdAt
        items {
            title
            unitPrice
            quantity
            discount
            totalPrice
        }
        company {
            id
            name
            country
            website
            avatarUrl
        }
        salesOwner {
            id
            name
        }
        contact {
            id
            name
        }
        }
    }
`;