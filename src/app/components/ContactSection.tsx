// src/app/components/ContactSection.tsx

'use client';
import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-[#f2f2f2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Envie sua mensagem e receba nossas promoções.</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#921b30] to-[#2b76c3] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b76c3] focus:border-transparent transition-colors" placeholder="Seu nome completo" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b76c3] focus:border-transparent transition-colors" placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b76c3] focus:border-transparent transition-colors resize-none" placeholder="Descreva como podemos ajudá-lo..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#2b76c3] hover:bg-[#3d52a6] text-white px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center text-lg">
                <Send className="mr-2" size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4"><MapPin className="text-[#921b30] mt-1 flex-shrink-0" size={24} /><div><h4 className="font-semibold text-gray-900 mb-1">Endereço</h4><p className="text-gray-600">Av. Expedicionário José Amaro, 1431  
Vila São Luiz, Duque de Caxias - RJ</p></div></div>
                <div className="flex items-start space-x-4"><Phone className="text-[#921b30] mt-1 flex-shrink-0" size={24} /><div><h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4><p className="text-gray-600">+55 21 97730-0379</p></div></div>
                <div className="flex items-start space-x-4"><Mail className="text-[#921b30] mt-1 flex-shrink-0" size={24} /><div><h4 className="font-semibold text-gray-900 mb-1">Email</h4><p className="text-gray-600">contato@tradicao.com.br</p></div></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Horários de Funcionamento</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2"><span className="text-gray-700">Segunda à Quinta</span><span className="font-semibold text-gray-900">8h às 17:30h</span></div>
                <div className="flex justify-between border-b pb-2"><span className="text-gray-700">Sexta-feira</span><span className="font-semibold text-gray-900">8h às 17:00h</span></div>
                <div className="flex justify-between border-b pb-2"><span className="text-gray-700">Sábado</span><span className="font-semibold text-gray-900">8h às 12h</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Domingo</span><span className="font-semibold text-[#921b30]">Fechado</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
