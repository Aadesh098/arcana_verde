import gql from "graphql-tag";


export const CALENDAR_UPDATE_EVENT_MUTATION = gql`
    mutation UpdateEvent($input: UpdateOneEventInput!) {
        updateOneEvent(input: $input) {
            id
        title
        description
        startDate
        endDate
        color
        createdAt
        createdBy {
            id
            name
        }
        category {
            id
            title
        }
        participants {
            id
            name
        }
        }
    }
`;

export const CALENDAR_GET_EVENT_QUERY = gql`
    query GetEvent($id: ID!) {
        event(id: $id) {
            id
        title
        description
        startDate
        endDate
        color
        createdAt
        createdBy {
            id
            name
        }
        category {
            id
            title
        }
        participants {
            id
            name
        }
        }
    }
`;