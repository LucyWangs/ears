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
                                className="react-switch-checkbox"
                                id={`react-switch-new`}
                                type="checkbox"
                            />
                            <label
                                style={{ background: isOn && '#825174' }}
                                className="react-switch-label"
                                htmlFor={`react-switch-new`}
                            >
                                <span className={`react-switch-button`}/>
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