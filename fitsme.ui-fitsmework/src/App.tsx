import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { IndexRoutes } from './routes';
function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				{IndexRoutes.map((prop: any, key: any) => {
					return <Route key={key} path={prop.path} component={prop.component} />;
				})}
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
