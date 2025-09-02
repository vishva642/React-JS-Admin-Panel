// import React, { useEffect, useRef } from 'react'
// import PropTypes from 'prop-types'

// import {
//   CRow,
//   CCol,
//   CDropdown,
//   CDropdownMenu,
//   CDropdownItem,
//   CDropdownToggle,
//   CWidgetStatsA,
// } from '@coreui/react'
// import { getStyle } from '@coreui/utils'
// import { CChartBar, CChartLine } from '@coreui/react-chartjs'
// import CIcon from '@coreui/icons-react'
// import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

// const WidgetsDropdown = (props) => {
//   const widgetChartRef1 = useRef(null)
//   const widgetChartRef2 = useRef(null)
//   const [counts, setCounts] = useState({
//     categories: 0,
//     subcategories: 0,
//     products: 0,
//     totalPrice: 0,
//   })
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [catRes, subRes, prodRes] = await Promise.all([
//           axios.get(`${import.meta.env.VITE_API_URL}/category`),
//           axios.get(`${import.meta.env.VITE_API_URL}/subcategory`),
//           axios.get(`${import.meta.env.VITE_API_URL}/product`),
//         ])

//         const categories = catRes.data.length
//         const subcategories = subRes.data.length
//         const products = prodRes.data.length
//         const totalPrice = prodRes.data.reduce((acc, item) => acc + (item.price || 0), 0)

//         setCounts({ categories, subcategories, products, totalPrice })
//       } catch (err) {
//         console.error(err)
//       }
//     }
//     fetchData()
//   }, [])

//   return (
//     <CRow className={props.className} xs={{ gutter: 4 }}>
//       <CCol sm={6} xl={4} xxl={3}>
//         <CWidgetStatsA
//           color="primary"
//           value={
//             <>
//               26K{' '}
//               <span className="fs-6 fw-normal">
//                 (-12.4% <CIcon icon={cilArrowBottom} />)
//               </span>
//             </>
//           }
//           title="Users"
//           action={
//             <CDropdown alignment="end">
//               <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
//                 <CIcon icon={cilOptions} />
//               </CDropdownToggle>
//               <CDropdownMenu>
//                 <CDropdownItem>Action</CDropdownItem>
//                 <CDropdownItem>Another action</CDropdownItem>
//                 <CDropdownItem>Something else here...</CDropdownItem>
//                 <CDropdownItem disabled>Disabled action</CDropdownItem>
//               </CDropdownMenu>
//             </CDropdown>
//           }
//           chart={
//             <CChartLine
//               ref={widgetChartRef1}
//               className="mt-3 mx-3"
//               style={{ height: '70px' }}
//               data={{
//                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                 datasets: [
//                   {
//                     label: 'My First dataset',
//                     backgroundColor: 'transparent',
//                     borderColor: 'rgba(255,255,255,.55)',
//                     pointBackgroundColor: getStyle('--cui-primary'),
//                     data: [65, 59, 84, 84, 51, 55, 40],
//                   },
//                 ],
//               }}
//               options={{
//                 plugins: {
//                   legend: {
//                     display: false,
//                   },
//                 },
//                 maintainAspectRatio: false,
//                 scales: {
//                   x: {
//                     border: {
//                       display: false,
//                     },
//                     grid: {
//                       display: false,
//                       drawBorder: false,
//                     },
//                     ticks: {
//                       display: false,
//                     },
//                   },
//                   y: {
//                     min: 30,
//                     max: 89,
//                     display: false,
//                     grid: {
//                       display: false,
//                     },
//                     ticks: {
//                       display: false,
//                     },
//                   },
//                 },
//                 elements: {
//                   line: {
//                     borderWidth: 1,
//                     tension: 0.4,
//                   },
//                   point: {
//                     radius: 4,
//                     hitRadius: 10,
//                     hoverRadius: 4,
//                   },
//                 },
//               }}
//             />
//           }
//         />
//       </CCol>
//       <CCol sm={6} xl={4} xxl={3}>
//         <CWidgetStatsA
//           color="info"
//           value={
//             <>
//               $6.200{' '}
//               <span className="fs-6 fw-normal">
//                 (40.9% <CIcon icon={cilArrowTop} />)
//               </span>
//             </>
//           }
//           title="Income"
//           action={
//             <CDropdown alignment="end">
//               <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
//                 <CIcon icon={cilOptions} />
//               </CDropdownToggle>
//               <CDropdownMenu>
//                 <CDropdownItem>Action</CDropdownItem>
//                 <CDropdownItem>Another action</CDropdownItem>
//                 <CDropdownItem>Something else here...</CDropdownItem>
//                 <CDropdownItem disabled>Disabled action</CDropdownItem>
//               </CDropdownMenu>
//             </CDropdown>
//           }
//           chart={
//             <CChartLine
//               ref={widgetChartRef2}
//               className="mt-3 mx-3"
//               style={{ height: '70px' }}
//               data={{
//                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                 datasets: [
//                   {
//                     label: 'My First dataset',
//                     backgroundColor: 'transparent',
//                     borderColor: 'rgba(255,255,255,.55)',
//                     pointBackgroundColor: getStyle('--cui-info'),
//                     data: [1, 18, 9, 17, 34, 22, 11],
//                   },
//                 ],
//               }}
//               options={{
//                 plugins: {
//                   legend: {
//                     display: false,
//                   },
//                 },
//                 maintainAspectRatio: false,
//                 scales: {
//                   x: {
//                     border: {
//                       display: false,
//                     },
//                     grid: {
//                       display: false,
//                       drawBorder: false,
//                     },
//                     ticks: {
//                       display: false,
//                     },
//                   },
//                   y: {
//                     min: -9,
//                     max: 39,
//                     display: false,
//                     grid: {
//                       display: false,
//                     },
//                     ticks: {
//                       display: false,
//                     },
//                   },
//                 },
//                 elements: {
//                   line: {
//                     borderWidth: 1,
//                   },
//                   point: {
//                     radius: 4,
//                     hitRadius: 10,
//                     hoverRadius: 4,
//                   },
//                 },
//               }}
//             />
//           }
//         />
//       </CCol>
//       <CCol sm={6} xl={4} xxl={3}>
//         <CWidgetStatsA
//           color="warning"
//           value={
//             <>
//               2.49%{' '}
//               <span className="fs-6 fw-normal">
//                 (84.7% <CIcon icon={cilArrowTop} />)
//               </span>
//             </>
//           }
//           title="Conversion Rate"
//           action={
//             <CDropdown alignment="end">
//               <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
//                 <CIcon icon={cilOptions} />
//               </CDropdownToggle>
//               <CDropdownMenu>
//                 <CDropdownItem>Action</CDropdownItem>
//                 <CDropdownItem>Another action</CDropdownItem>
//                 <CDropdownItem>Something else here...</CDropdownItem>
//                 <CDropdownItem disabled>Disabled action</CDropdownItem>
//               </CDropdownMenu>
//             </CDropdown>
//           }
//           chart={
//             <CChartLine
//               className="mt-3"
//               style={{ height: '70px' }}
//               data={{
//                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                 datasets: [
//                   {
//                     label: 'My First dataset',
//                     backgroundColor: 'rgba(255,255,255,.2)',
//                     borderColor: 'rgba(255,255,255,.55)',
//                     data: [78, 81, 80, 45, 34, 12, 40],
//                     fill: true,
//                   },
//                 ],
//               }}
//               options={{
//                 plugins: {
//                   legend: {
//                     display: false,
//                   },
//                 },
//                 maintainAspectRatio: false,
//                 scales: {
//                   x: {
//                     display: false,
//                   },
//                   y: {
//                     display: false,
//                   },
//                 },
//                 elements: {
//                   line: {
//                     borderWidth: 2,
//                     tension: 0.4,
//                   },
//                   point: {
//                     radius: 0,
//                     hitRadius: 10,
//                     hoverRadius: 4,
//                   },
//                 },
//               }}
//             />
//           }
//         />
//       </CCol>
//       <CCol sm={6} xl={4} xxl={3}>
//         <CWidgetStatsA
//           color="danger"
//           value={
//             <>
//               44K{' '}
//               <span className="fs-6 fw-normal">
//                 (-23.6% <CIcon icon={cilArrowBottom} />)
//               </span>
//             </>
//           }
//           title="Sessions"
//           action={
//             <CDropdown alignment="end">
//               <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
//                 <CIcon icon={cilOptions} />
//               </CDropdownToggle>
//               <CDropdownMenu>
//                 <CDropdownItem>Action</CDropdownItem>
//                 <CDropdownItem>Another action</CDropdownItem>
//                 <CDropdownItem>Something else here...</CDropdownItem>
//                 <CDropdownItem disabled>Disabled action</CDropdownItem>
//               </CDropdownMenu>
//             </CDropdown>
//           }
//           chart={
//             <CChartBar
//               className="mt-3 mx-3"
//               style={{ height: '70px' }}
//               data={{
//                 labels: [
//                   'January',
//                   'February',
//                   'March',
//                   'April',
//                   'May',
//                   'June',
//                   'July',
//                   'August',
//                   'September',
//                   'October',
//                   'November',
//                   'December',
//                   'January',
//                   'February',
//                   'March',
//                   'April',
//                 ],
//                 datasets: [
//                   {
//                     label: 'My First dataset',
//                     backgroundColor: 'rgba(255,255,255,.2)',
//                     borderColor: 'rgba(255,255,255,.55)',
//                     data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
//                     barPercentage: 0.6,
//                   },
//                 ],
//               }}
//               options={{
//                 maintainAspectRatio: false,
//                 plugins: {
//                   legend: {
//                     display: false,
//                   },
//                 },
//                 scales: {
//                   x: {
//                     grid: {
//                       display: false,
//                       drawTicks: false,
//                     },
//                     ticks: {
//                       display: false,
//                     },
//                   },
//                   y: {
//                     border: {
//                       display: false,
//                     },
//                     grid: {
//                       display: false,
//                       drawBorder: false,
//                       drawTicks: false,
//                     },
//                     ticks: {
//                       display: false,
//                     },
//                   },
//                 },
//               }}
//             />
//           }
//         />
//       </CCol>
//     </CRow>
//   )
// }

// WidgetsDropdown.propTypes = {
//   className: PropTypes.string,
//   withCharts: PropTypes.bool,
// }

// export default WidgetsDropdown

import React, { useEffect, useState, useRef } from 'react'
import {
  CRow,
  CCol,
  CWidgetStatsA,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from '@coreui/react'
import { CChartLine, CChartBar } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilOptions, cilArrowBottom, cilArrowTop } from '@coreui/icons'
import { getStyle } from '@coreui/utils'
import axios from 'axios'

const WidgetsDropdown = (props) => {
  const [counts, setCounts] = useState({
    categories: 0,
    subcategories: 0,
    products: 0,
    totalPrice: 0,
  })

  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, subRes, prodRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/category`),
          axios.get(`${import.meta.env.VITE_API_URL}/subcategory`),
          axios.get(`${import.meta.env.VITE_API_URL}/product`),
        ])

        const categories = catRes.data.length
        const subcategories = subRes.data.length
        const products = prodRes.data.length
        const totalPrice = prodRes.data.reduce((acc, item) => acc + (Number(item.p_price) || 0), 0)
        setCounts({ categories, subcategories, products, totalPrice })
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      {/* Total Categories */}
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="primary"
          value={<>{counts.categories}</>}
          title="Total Categories"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Refresh</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              ref={widgetChartRef1}
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                  {
                    label: 'Categories',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-primary'),
                    data: [10, 20, 30, 40, 50, 60, counts.categories],
                  },
                ],
              }}
              options={{
                plugins: { legend: { display: false } },
                maintainAspectRatio: false,
                scales: { x: { display: false }, y: { display: false } },
              }}
            />
          }
        />
      </CCol>

      {/* Total Subcategories */}
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="info"
          value={<>{counts.subcategories}</>}
          title="Total Subcategories"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Refresh</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              ref={widgetChartRef2}
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                  {
                    label: 'Subcategories',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [5, 15, 25, 35, 45, 55, counts.subcategories],
                  },
                ],
              }}
              options={{
                plugins: { legend: { display: false } },
                maintainAspectRatio: false,
                scales: { x: { display: false }, y: { display: false } },
              }}
            />
          }
        />
      </CCol>

      {/* Total Products */}
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="warning"
          value={<>{counts.products}</>}
          title="Total Products"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Refresh</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                  {
                    label: 'Products',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [15, 25, 35, 45, 55, 65, counts.products],
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: { legend: { display: false } },
                maintainAspectRatio: false,
                scales: { x: { display: false }, y: { display: false } },
              }}
            />
          }
        />
      </CCol>

      {/* Total Price */}
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="danger"
          value={<>₹ {counts.totalPrice}</>}
          title="Total Products Price"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Refresh</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                  {
                    label: 'Total Price',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [100, 200, 300, 400, 500, 600, counts.totalPrice],
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={{
                plugins: { legend: { display: false } },
                maintainAspectRatio: false,
                scales: { x: { display: false }, y: { display: false } },
              }}
            />
          }
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
