import './index.css'

const LanguageFIlter = (props)=>{
    const {eachLanguage,activeLanguageFilter,activeLanguage} = props

    const onLanguageFilter = ()=>{
        activeLanguageFilter(eachLanguage)
    }

    return(
    <li className="availble-languages-item">
        <button type="button" onClick={onLanguageFilter} className={activeLanguage ? "active-language-filter-btn language-filter-btn" : "language-filter-btn" }>{eachLanguage}</button>
    </li>
    )
}

export default LanguageFIlter