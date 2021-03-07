import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
// import { Formik } from 'formik'
import * as yup from 'yup'
// import * as Yup from 'yup'

import { Container, Button, Chip, TextField, InputLabel, Select, MenuItem, Grid } from '@material-ui/core'

import FormControl from '@material-ui/core/FormControl'

import Autocomplete from '@material-ui/lab/Autocomplete'

import scss from './create.module.scss'

const tags = [
  {
    name: 'Irene',
  },
  {
    name: 'Seulgi',
  },
  {
    name: 'Wendy',
  },
  {
    name: 'Joy',
  },
  {
    name: 'Yeri',
  },
  {
    name: 'SM',
  },
  {
    name: 'instagram',
  },
  {
    name: 'vlive',
  },
  {
    name: 'youtube',
  },
]

const validationSchema = yup.object({
  title: yup.string().min(4, '字數太少').max(50, '名稱太長了吧！').required('Required'),
  description: yup.string('請給多一點資訊').max(120, '太多資訊囉'),
  url: yup.string().url().required('Required'),
  subtitle: yup.string(),
  category: yup.string(),
  tags: '',
  date: yup
    .string()
    .matches(/[0-9]{4}\/(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])/g)
    .required('Required'),
})

const DataForm = () => {
  // const styles = useStyles()

  // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))

  // const handleDateChange = date => {
  //   setSelectedDate(date)
  // }

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      url: '',
      subtitle: '',
      category: '',
      tags: '',
      date: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Container maxWidth="md">
      <form onSubmit={formik.handleSubmit}>
        <div className={scss.row}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="影片名稱"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>

        <div className={scss.row}>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="簡短描述"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>

        <div className={scss.row}>
          <TextField
            fullWidth
            id="link"
            name="link"
            label="影片網址"
            value={formik.values.url}
            onChange={formik.handleChange}
          />
        </div>

        <div className={scss.row}>
          <TextField
            fullWidth
            id="date"
            name="date"
            label="影片日期"
            value={formik.values.date}
            placeholder={'日期格式請按照 YYYYMMDD 填寫'}
          />
        </div>

        <div className={scss.row}>
          <FormControl style={{ minWidth: 200 }}>
            <InputLabel id="subtitle">是否有中文字幕</InputLabel>
            <Select
              labelId="subtitle"
              id="subtitle"
              autoWidth={false}
              value={formik.values.subtitle}
              onChange={formik.handleChange}
            >
              <MenuItem value="chinese">有</MenuItem>
              <MenuItem value="none">沒有</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={scss.row}>
          <FormControl style={{ minWidth: 200 }}>
            <InputLabel id="main-category">主分類</InputLabel>
            <Select
              labelId="main-category"
              id="main-category"
              autoWidth={false}
              value={formik.values.category}
              onChange={formik.handleChange}
            >
              <MenuItem value="official">官方</MenuItem>
              <MenuItem value="tv">節目錄製</MenuItem>
              <MenuItem value="radio">電台</MenuItem>
              <MenuItem value="ad">廣告</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={scss.row}>
          <Autocomplete
            multiple
            id="tags-standard"
            options={tags}
            getOptionLabel={option => option.name}
            defaultValue={[tags[0]]}
            renderInput={params => (
              <TextField
                {...params}
                variant="standard"
                label="關鍵字"
                placeholder="輸入關鍵字並點擊選項"
                value={formik.values.tags}
                onChange={formik.handleChange}
              />
            )}
          />
        </div>

        <Grid>
          <Button color="primary" variant="contained" fullWidth type="submit" onClick={formik.handleClick}>
            Submit
          </Button>
        </Grid>
      </form>
    </Container>
  )
}

// const BasicForm = withFormik(DataForm)

export default DataForm
