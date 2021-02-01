import TestComponent from 'components/TestComponent';
import { useAppContext } from 'context/App';
import Layout from 'layouts/main';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'services/ApiEntities/todos';
import { useSelector } from 'store';
import { setTest } from 'store/test/actions';
import { IExtendedAppContext } from 'store/with-redux-store';
import classes from './index.module.scss';

const IndexPage = () => {
	const { isDesktop } = useAppContext();
	const { test } = useSelector((state) => state.test);
	const dispatch = useDispatch();

	useEffect(() => {
		todos.get().then((res) => {
			console.log(res);
		});
		todos.get({}, [1]).then((res) => {
			console.log(res);
		});
		console.log(isDesktop);
		// change data stare from browser
		setTimeout(() => {
			dispatch(setTest(100));
		}, 5000);
	}, []);

	return (
		<Layout title="Index">
			<div className={classes.root}>Index page</div>
			<TestComponent value={test}/>
		</Layout>
	);
};

IndexPage.getInitialProps = (ctx: IExtendedAppContext) => {
	const { reduxStore } = ctx;
	// change data stare from SSR
	reduxStore.dispatch(setTest(2));
};

export default IndexPage;
