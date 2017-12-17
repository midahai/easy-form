import React from "react";
import I from 'immutable';

import styles from '../styles/main.scss';

export default class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [1000, 1002, 1005, 1010, 1011, 1012, 1013, 1014, 1015, 1016],
            selected: [],
            input: ''
        }
    }

    handleSelectItem(item) {
        let selected = this.state.selected;
        if (selected.has(item)) {
            // 已经在选中列表中
            this.setState({
                selected: selected.delete(item)
            });
        } else {
            this.setState({
                selected: selected.add(item)
            });
        }
    }
    renderList() {
        let {list, selected} = this.state,
            toBeRendered = [];
        list.forEach(item => {
            toBeRendered.push(<li
                key={item}
                className={`${styles.item} ${selected.has(item) ? styles.selected : ''}`}
                onClick={() => this.handleSelectItem(item)}>{item}</li>)
        });
        return toBeRendered;
    }
    render() {
        let {list, input} = this.state;
        return <div className={styles.wrap}>
            <div>
                <h1 className={styles.title}>白名单：</h1>
                <ul className={styles.list}>
                    {this.renderList()}
                </ul>
            </div>
        </div>;
    }
}
