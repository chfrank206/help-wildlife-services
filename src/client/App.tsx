import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <main className="container my-5">
                <h1 className="text-primary text-center">Hello {this.state.name}!</h1>
            </main>
        )
    }
}

export interface IAppProps { }

export interface IAppState {
    name: string;
}

export default App;