import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Option } from '../../select-menu'

const AutocompleteItem = memo(
  forwardRef(function AutocompleteItem(props, ref) {
    const { children, isHighlighted, isSelected, style, ...restProps } = props

    return (
      <Option
        ref={ref}
        isHighlighted={isHighlighted}
        isSelected={isSelected}
        label={children}
        style={style}
        {...restProps}
      />
    )
  })
)

AutocompleteItem.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  isSelected: PropTypes.bool,
  isHighlighted: PropTypes.bool
}

export default AutocompleteItem
