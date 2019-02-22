import React from "react"

const Range =({ name, value, min, max, onChange }) => (
		<div className="setting">
            <label>
                <div>{name}</div>
                <div>{value}</div>
            </label>

            <input
                id={name}
                type="range"
                value={value}
                step="1"
                min={min}
                max={max}
                onChange={onChange} />
		</div>

	);
export default Range;