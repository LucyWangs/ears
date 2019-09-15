import React from 'react';
import './Switch.css';

class Switch extends React.Component {
    state = {
        isOn: false,
    }

    render () {
        const { handleToggle, isOn, id, title } = this.props;
        return (
            <>
                <div id={id}>
                    <div className="level">
                        <div className="level-left">
                            <input
                                checked={isOn}
                                onChange={handleToggle}
                                className="react-switch2-checkbox"
                                id={`react-switch2-new`}
                                type="checkbox"
                            />
                            <label
                                style={{ background: isOn && '#825174' }}
                                className="react-switch2-label"
                                htmlFor={`react-switch2-new`}
                            >
                                <span className={`react-switch2-button`}/>
                            </label>
                            <div className="level-item is-size-5" style={{ marginLeft: 5 }}>{title}</div>
                        </div>
                        <div className="level-right">
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Switch;