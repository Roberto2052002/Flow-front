import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AIChat() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: t("aiWelcome"),
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your question. This is a placeholder response. Our AI assistant will be fully integrated soon to provide detailed answers about Flow International Group.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md max-h-96 flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <CardTitle className="text-lg">{t("aiAssistant")}</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </Button>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-3 rounded-lg ${
                      msg.sender === "bot"
                        ? "bg-blue-50 text-slate-700"
                        : "bg-slate-100 text-slate-800 ml-8"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t("typeQuestion")}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
