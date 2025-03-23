// components/MessagingSystem.jsx
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/shadcn/avatar";

export function Message({ userId, userType }) {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchConversations();
  }, [userId]);


  const fetchConversations = async () => {
    try {
      const response = await fetch(`/api/conversations?userId=${userId}&userType=${userType}`);
      const data = await response.json();
      setConversations(data);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };


  const fetchMessages = async (conversationId) => {
    try {
      const response = await fetch(`/api/messages?conversationId=${conversationId}`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };


  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
    fetchMessages(conversation._id);
  };


  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    try {
      const messageData = {
        conversationId: selectedConversation._id,
        senderId: userId,
        content: newMessage,
        timestamp: new Date()
      };

      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageData)
      });

      if (response.ok) {
        setMessages([...messages, await response.json()]);
        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex h-screen w-full max-w-4xl mx-auto border rounded-lg overflow-hidden">

      <div className="w-1/3 border-r bg-gray-50">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Messages</h2>
        </div>
        <ScrollArea className="h-[calc(100vh-60px)]">
          {conversations.map((conversation) => (
            <div
              key={conversation._id}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${
                selectedConversation?._id === conversation._id ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleConversationSelect(conversation)}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={conversation.otherUser.avatar} />
                <AvatarFallback>
                  {conversation.otherUser.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="font-medium">{conversation.otherUser.name}</p>
                <p className="text-sm text-gray-500 truncate">
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>


      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b bg-gray-50">
              <h3 className="text-lg font-medium">
                {selectedConversation.otherUser.name}
              </h3>
              <p className="text-sm text-gray-500">
                {selectedConversation.otherUser.role} 
                {userType === 'student' ? ' @ ' + selectedConversation.startupName : ''}
              </p>
            </div>


            <ScrollArea className="flex-1 p-4">
              {messages.map((message) => (
                <div
                  key={message._id}
                  className={`flex ${
                    message.senderId === userId ? 'justify-end' : 'justify-start'
                  } mb-4`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.senderId === userId
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200'
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className="text-xs mt-1 opacity-75">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollArea>


            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <Button type="submit">Send</Button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
};