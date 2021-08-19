const server = require('express').Router()
const {Usuario} = require('../db')
const axios = require ('axios')
const {API_BASE_ROUTE} = process.env
