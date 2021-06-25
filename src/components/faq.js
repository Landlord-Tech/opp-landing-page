import React, { useState } from "react"
import Collapsible from "react-collapsible"
import Icon from "./Icon"
import { func } from "prop-types"

const Faq = ({ data }) => {

  return (
    <>
      {
        data.map((q, i) => {
          return (
            <Collapsible
              key={i}
              transitionTime={300}
              trigger={
                <div className='trigger-inner'>
                  <h4 className='h4'>{q.question}</h4>
                  <Icon
                    icon='plus'
                    className='plus'
                    size={24}
                  />
                  <Icon
                    icon='minus'
                    className='minus'
                    size={24}
                  />
                </div>
              }
            >
              <p>{q.answer}</p>
            </Collapsible>
          )
        })
        }
        </>
        )
      }

        export default Faq
