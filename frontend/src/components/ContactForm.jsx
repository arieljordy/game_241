import React from 'react'
import "../assets/css/component-contact-form.css"

export default function ContactForm(){

    return(
        <div class="form-contact-container bg-trans">
            <form class="form-contact">
                <div class="form-contact-group">
                    <label for="name" className="element-noir">Votre Nom</label>
                    <input type="text" name="name" required/>
                </div>
                <div class="form-contact-group">
                    <label for="email" className="element-noir">Votre Email</label>
                    <input type="email" name="email" required/>
                </div>
                <div class="form-contact-group">
                <label for="textarea" className="element-noir">Comment pourrions-nous aider?</label>
                    <textarea name="textarea" rows="10" cols="50" required>
                    </textarea>
                </div>
                <button class="form-submit-btn" type="submit">envoyer</button>
            </form>
        </div>
    )
}
