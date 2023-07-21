import { createStore } from 'redux';

export const switchColorVersion = (payload) => ({
	type: 'version/switch',
	payload,
});

const initialState = {
	isDark: false,
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
