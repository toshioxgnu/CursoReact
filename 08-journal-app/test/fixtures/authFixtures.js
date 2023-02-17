export const initialState = {
    status:'checking', //'not-authenticated', 'authenticated','checking'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authenticatedState = {
    status:'authenticated', //'not-authenticated', 'authenticated','checking'
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo user',
    photoURL: 'https://demo.jpg',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status:'not-authenticated', //'not-authenticated', 'authenticated','checking'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo user',
    photoURL: 'https://demo.jpg',
}