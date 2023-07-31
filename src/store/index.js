import { createStore } from 'redux';

export const switchColorVersion = (payload) => ({
	type: 'version/switch',
	payload,
});

const initialState = {
	isDark: !!JSON.parse(localStorage.getItem('isDark')),
};

const saveToLocalStorage = (state) => {
	try {
		const serialisedVersionState = JSON.stringify(state.isDark);
		localStorage.setItem('isDark', serialisedVersionState);
	} catch (e) {
		console.warn(e);
	}
};

const versionReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'version/switch':
			return {
				...state,
				isDark: !state.isDark,
			};
		default:
			return state;
	}
};

export const store = createStore(versionReducer);

store.subscribe(() => saveToLocalStorage(store.getState()));
