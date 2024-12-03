
import Image from 'next/image'
import React from 'react'
import { Container, Table } from 'reactstrap'
import checkIcon from "../../images/check.png"

const PricingTable = () => {
  return (
    <section className='pricing-table'>
      <Container>
        <div className='pricing-content'>
          <h1 className='heading'>Subscription Plans</h1>
          <p className='sub-heading'>Select a suitable plan to enjoy benefits like no other platform</p>
          <div className='supplier-toggle'>
            <p className='txt1'>Indian Supplier</p>
            <label class="toggle-switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
            <p className='txt2'>International Supplier</p>
          </div>
        </div>
        <Table bordered responsive
        >
          <thead>
            <tr>
              <th>
                <h2 className='heading2'>deliverables</h2>
              </th>
              <th align='cente'>
                <div className='th-header'>
                  <p className='sub-heading'>6 month plan</p>
                  <h2 className='heading'>₹ 92,040</h2>
                  <button className='plan-btn'>Select Plan</button>
                </div>
              </th>
              <th align='cente'>
                <div className='th-header'>
                  <p className='sub-heading'>12 month plan</p>
                  <h2 className='heading'>₹ 1,41,600</h2>
                  <button className='plan-btn'>Select Plan</button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Membership Duration</td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 6 Months
                </div>
              </td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 12 Months
                </div>
              </td>
            </tr>
            <tr>
              <td>Participation In Negotiations</td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 6 Months
                </div>
              </td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 12 Months
                </div>
              </td>
            </tr>
            <tr>
              <td>Participation In Negotiations</td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 6 Months
                </div>
              </td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 12 Months
                </div>
              </td>
            </tr>
            <tr>
              <td>Participation In Negotiations</td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 6 Months
                </div>
              </td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 12 Months
                </div>
              </td>
            </tr>
            <tr>
              <td>Participation In Negotiations</td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 6 Months
                </div>
              </td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 12 Months
                </div>
              </td>
            </tr>
            <tr>
              <td>Participation In Negotiations</td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 6 Months
                </div>
              </td>
              <td>
                <div className='check'>
                  <Image src={checkIcon} className='logo' width="auto" height="auto" alt='logo' priority /> 12 Months
                </div>
              </td>
            </tr>

          </tbody>
        </Table>
      </Container>
    </section>
  )
}

export default PricingTable